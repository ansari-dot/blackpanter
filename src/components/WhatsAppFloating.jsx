import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-500 hover:scale-110"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
};

export default WhatsAppFloating;
