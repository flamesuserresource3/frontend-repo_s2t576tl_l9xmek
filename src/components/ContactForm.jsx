import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get in touch</h2>
          <p className="mt-3 text-slate-600">Questions about pricing, features, or enterprise? We’re here to help.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="rounded-xl bg-green-50 p-4 text-green-800">
              Thanks! We received your message and will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-100 placeholder:text-slate-400 focus:ring-4"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-100 placeholder:text-slate-400 focus:ring-4"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-100 placeholder:text-slate-400 focus:ring-4"
                  placeholder="Tell us a bit about your needs..."
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="h-4 w-4" />
                  We typically reply within 1 business day.
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
