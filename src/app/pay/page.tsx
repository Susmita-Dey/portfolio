import { redirect } from "next/navigation";

const Pay = () => {
  const paymentLink = redirect("https://razorpay.me/@susmitadeybusiness");
  return paymentLink;
};

export default Pay;
