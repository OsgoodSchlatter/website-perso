const stripe = require("stripe")(process.env.SECRET_STRIPE_LIVE);

exports.handler = async (event) => {
  const { priceId } = JSON.parse(event.body);

  if (!priceId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Price ID is required" }),
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "https://contour-music.com/success/1",
    cancel_url: "https://contour-music.com/cancel/1",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url }),
  };
};
