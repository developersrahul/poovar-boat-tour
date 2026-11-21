import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: 'Morning (8:00 AM - 11:00 AM)',
    packageType: '2 Hours Motor Boat Cruise',
    guests: '2 to 4 Guests',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = encodeURIComponent(
      `*New Poovar Boat Tour Enquiry*\n` +
      `---------------------------------\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      `📅 *Date:* ${formData.date || 'Flexible / Today'}\n` +
      `⏰ *Preferred Time:* ${formData.time}\n` +
      `⛵ *Package:* ${formData.packageType}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      (formData.message.trim() ? `💬 *Notes:* ${formData.message.trim()}\n` : '') +
      `---------------------------------\n` +
      `_Please confirm availability and boarding jetty directions._`
    );

    const whatsappUrl = `https://wa.me/917902291301?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Preferred Time Slot
          </label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          >
            <option>Early Bird / Sunrise (6:30 AM - 8:00 AM)</option>
            <option>Morning (8:00 AM - 11:30 AM)</option>
            <option>Afternoon (11:30 AM - 3:30 PM)</option>
            <option>Golden Hour / Sunset (4:00 PM - 6:30 PM)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Cruise Package
          </label>
          <select
            value={formData.packageType}
            onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          >
            <option>Motor boat cruise (2 hours, up to 7 people)</option>
            <option>Sunset cruise (evening 5:00 PM - 6:30 PM)</option>
            <option>Honeymoon cruise (private couple ride)</option>
            <option>Bird watching cruise (mangrove channels)</option>
            <option>Taxi service (airport/railway/sightseeing)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
            Number of Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full bg-white border border-[#ede8e1] rounded-[7px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b19d7f] transition-all"
          >
            <option>1 to 2 Guests (Couple)</option>
            <option>3 to 5 Guests (Family)</option>
            <option>6 to 7 Guests (Full Boat)</option>
            <option>8+ Guests (Multiple Boats)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-forest-900 mb-1.5">
          Special Notes or Questions (Optional)
        </label>
        <textarea
          rows={2}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Floating restaurant halt required, elderly passenger assistance needed..."
          className="w-full bg-sage-50 border border-forest-900/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold text-xs uppercase tracking-[0.2em] py-4 px-6 rounded-[7px] shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <span>Send Formatted Enquiry to WhatsApp</span>
        <span>→</span>
      </button>

      <p className="text-center text-xs text-forest-700/80 mt-2">
        Opens official WhatsApp conversation directly. No account creation required.
      </p>
    </form>
  );
}
