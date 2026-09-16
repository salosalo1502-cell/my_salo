import transporter from "../config/mailer.js";

const sendConsultation = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Consultation Request",
      text: ` Consultation Request\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(" CONSULTATION SENT:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Consultation email sent",
    });
  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
};

export default sendConsultation;