import emailjs from '@emailjs/browser';

// Initialisation d'EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  throw new Error('EmailJS credentials are missing in environment variables');
}