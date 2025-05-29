import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const line_items = req.body.map((item) => {
        const img = item.image[0].asset._ref;
        const newImage = img
          .replace('image-', 'https://cdn.sanity.io/images/dow10h3v/production/')
          .replace('-png', '.png');

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      });

      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: process.env.NEXT_PUBLIC_STANDARD_SHIPPING_RATE },
          { shipping_rate: process.env.NEXT_PUBLIC_EXPRESS_SHIPPING_RATE },
        ],
        line_items,
        success_url: `${req.headers.origin}/successPay`,
        cancel_url: `${req.headers.origin}/cart`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error('Stripe session creation failed:', err);
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
