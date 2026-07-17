import { hotel, whatsappLink } from '../../data/hotel';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello, I would like to inquire about a reservation at ' + hotel.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}
