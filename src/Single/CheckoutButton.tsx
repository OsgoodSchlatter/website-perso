type CheckoutButtonProps = {
    priceId: string; // the Stripe Price ID of the selected product
};

export const CheckoutButton = ({ priceId }: CheckoutButtonProps) => {
    const handleCheckout = async () => {
        const res = await fetch("/.netlify/functions/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ priceId }),
        });

        const { url } = await res.json();
        window.location.href = url;
    };

    return (
        <button className="bg-yellow-400 p-3 rounded text-black font-fatkat" onClick={handleCheckout}>
            Buy Now
        </button>
    );
};
