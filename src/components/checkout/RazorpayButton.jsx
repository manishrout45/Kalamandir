"use client";

export default function RazorpayButton({ amount, address }) {

  const handlePayment = async () => {

    if (!address) {
      alert("Please add address first");
      return;
    }

    try {
      // Future backend integration
      // fetch("/api/payment")

      console.log("Proceeding to pay", amount);

      alert("Payment gateway will connect later");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
    >
      Pay ₹{amount}
    </button>
  );
}