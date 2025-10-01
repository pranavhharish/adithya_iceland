'use client';

import React, { useEffect, useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source?: string;
};

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: '',
  });

  useEffect(() => {
    const openHandler = (e: Event) => {
      const custom = e as CustomEvent<{ source?: string }>;
      setForm((f) => ({ ...f, source: custom.detail?.source || '' }));
      setOpen(true);
      setSuccess(null);
      setError(null);
    };
    const closeHandler = () => setOpen(false);

    window.addEventListener('open-booking', openHandler as EventListener);
    window.addEventListener('close-booking', closeHandler);

    return () => {
      window.removeEventListener('open-booking', openHandler as EventListener);
      window.removeEventListener('close-booking', closeHandler);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '', source: form.source });
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 3000);
    } catch (err: any) {
      setSuccess(false);
      setError(err?.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };


  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative z-[1001] booking-shell w-[90vw] sm:w-full max-w-sm sm:max-w-md md:max-w-xl rounded-2xl p-5 sm:p-6 md:p-10 text-stone-900 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 rounded-full p-2 text-stone-500 hover:bg-stone-100"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="w-full">
        <div className="rounded-2xl border border-stone-200/70 bg-white shadow-sm p-4 sm:p-6 md:p-8">
        <div className="mb-4 sm:mb-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">Secure Your Spot</h3>
          <p className="mt-2 text-sm text-stone-600">Fill in your details and we’ll get back to you shortly.</p>
        </div>

        <div className="border-t border-stone-200 mt-4 sm:mt-6 pt-5 sm:pt-7" />

        {success ? (
          <div className="rounded-lg bg-green-50 text-green-700 p-6 sm:p-7 text-center">
            Thanks! We’ve received your details. We’ll reach out shortly.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-stone-700">Full name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-iceland-green"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-iceland-green"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-stone-700">Phone / WhatsApp</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-iceland-green"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-stone-700">Anything we should know?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Preferred dates, questions, special requests..."
                value={form.message}
                onChange={onChange}
                rows={5}
                className="w-full rounded-lg border border-stone-300 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-iceland-green"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-to-r from-iceland-green to-teal-400 text-white py-3.5 font-semibold hover:opacity-95 disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {error && <div className="text-sm text-red-600">{error}</div>}
          </form>
        )}

        <p className="mt-6 sm:mt-7 text-xs leading-relaxed text-stone-500 text-center">
          We respect your privacy. Your information is used only to contact you about the trip.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}


