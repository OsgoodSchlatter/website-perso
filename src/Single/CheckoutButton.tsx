export const CheckoutButton = () => {
    const handleCheckout = async () => {
        // call your Netlify function that creates the Checkout session
        const res = await fetch("/.netlify/functions/create-checkout-session", {
            method: "POST",
        });

        const { url } = await res.json();

        // redirect the user to Stripe Checkout
        window.location.href = url;
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
            Buy Now
        </button>
    );
};
