import nodemailer from "nodemailer";

function sanitizeInput(input: string) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Vérification des champs
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Tous les champs sont obligatoires." }),
        { status: 400 }
      );
    }

    // Nettoyage des données
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safeSubject = sanitizeInput(subject);
    const safeMessage = sanitizeInput(message);

    // Vérification email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return new Response(
        JSON.stringify({ success: false, message: "Adresse email invalide." }),
        { status: 400 }
      );
    }

    // Transporteur sécurisé via variables d'environnement
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true pour SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      replyTo: safeEmail,
      subject: safeSubject || `Nouveau message de ${safeName}`,
      text: `De: ${safeName} (${safeEmail})\nSujet: ${safeSubject}\n\n${safeMessage}`,
      html: `
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Objet :</strong> ${safeSubject}</p>
        <p>${safeMessage}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message envoyé avec succès." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Erreur interne, veuillez réessayer plus tard." }),
      { status: 500 }
    );
  }
}
