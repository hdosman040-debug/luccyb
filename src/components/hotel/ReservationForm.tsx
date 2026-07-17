import { useState } from 'react';
import { hotel, whatsappLink } from '../../data/hotel';

export function ReservationForm() {
  const [formData, setFormData] = useState({ name: '', date: '', guests: '1' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Reservation Inquiry:
Name: ${formData.name}
Date: ${formData.date}
Guests: ${formData.guests}`;
    window.open(whatsappLink(msg), '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 border border-border bg-card space-y-4 max-w-md mx-auto">
      <h3 className="font-serif text-2xl text-primary mb-4">Book Your Stay</h3>
      <input 
        required
        placeholder="Full Name"
        className="w-full p-3 border border-input bg-background"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        required
        type="date"
        className="w-full p-3 border border-input bg-background"
        onChange={(e) => setFormData({...formData, date: e.target.value})}
      />
      <button type="submit" className="w-full bg-primary text-secondary p-3 hover:bg-accent transition-colors">
        Send Inquiry via WhatsApp
      </button>
    </form>
  );
}
