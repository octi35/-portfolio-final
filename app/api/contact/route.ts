import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validar datos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Configurar el email usando Resend (alternativa gratuita)
    // O puedes usar nodemailer, sendgrid, etc.
    
    // Por ahora, vamos a usar Web3Forms que es gratis y simple
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        name: name,
        email: email,
        message: message,
        subject: `Nuevo mensaje de ${name} desde tu portfolio`,
        from_name: 'Portfolio Octavio Fakiani',
        to: 'octifaki@gmail.com',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: 'Mensaje enviado correctamente' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
