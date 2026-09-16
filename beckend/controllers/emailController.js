import transporter from "../config/mailer.js";

const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New message from website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("📨 SENT:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent",
    });
  } catch (error) {
    console.error(" ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
};

export default sendEmail;