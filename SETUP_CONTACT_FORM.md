# Configuración del formulario de contacto

El formulario de contacto usa **Web3Forms** para enviar emails directamente a tu correo sin necesidad de un servidor backend.

## Configuración (5 minutos):

1. **Obtén tu Access Key:**
   - Ve a https://web3forms.com
   - Ingresa tu email: **octifaki@gmail.com**
   - Verifica tu email
   - Copia tu Access Key

2. **Configura la variable de entorno:**
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega: `WEB3FORMS_ACCESS_KEY=tu_access_key_aqui`

3. **Listo!**
   - Los mensajes del formulario llegarán a octifaki@gmail.com
   - Incluirán: nombre, email del remitente y mensaje

## Ejemplo de .env.local:
```
WEB3FORMS_ACCESS_KEY=abc123def456ghi789
```

## Alternativas gratuitas:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Resend**: https://resend.com (requiere más configuración)

Web3Forms es recomendado por ser gratis, simple y sin límites estrictos.
