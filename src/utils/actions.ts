export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("name") as string;
  const senderEmail = formData.get("email") as string;
  const senderLocation = formData.get("location") as string;
  const senderPrice = formData.get("price") as string;
  const senderCompany = formData.get("company") as string;
  const senderMessage = formData.get("message") as string;

  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: senderName,
        email: senderEmail,
        location: senderLocation,
        price: senderPrice,
        company: senderCompany,
        message: senderMessage,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      data = { error: "Failed to parse response" };
    }

    if (response.ok) {
      console.log("Email sent successfully:", data);
    } else {
      console.error("Error sending email:", data.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
