'use client';

import { useState } from 'react';
import Link from 'next/link';
import { clinics } from '@/data/clinics';

/**
 * İletişim formu: mesaj sunucuya gönderilmez, seçilen kliniğin WhatsApp sohbeti
 * hazır metinle açılır. Böylece sitede kişisel veri toplanmaz ve saklanmaz.
 */
export default function WhatsAppForm() {
  const [clinicId, setClinicId] = useState(clinics[0].id);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const clinic = clinics.find((c) => c.id === clinicId) ?? clinics[0];
  const text = `Merhaba, ben ${name.trim() || '...'}. ${message.trim()}`.trim();
  const href = `${clinic.whatsappHref}?text=${encodeURIComponent(text)}`;
  const ready = name.trim().length > 1 && message.trim().length > 1;

  const fieldClass =
    'w-full rounded-xl border border-ink/20 bg-cream/60 px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-mint';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) window.open(href, '_blank', 'noopener,noreferrer');
      }}
      className="space-y-4"
    >
      <fieldset>
        <legend className="text-sm font-medium text-ink mb-2">Hangi klinik?</legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {clinics.map((c) => (
            <label
              key={c.id}
              className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                clinicId === c.id ? 'border-mint bg-mint-light/20' : 'border-ink/15 hover:border-mint/50'
              }`}
            >
              <input
                type="radio"
                name="klinik"
                value={c.id}
                checked={clinicId === c.id}
                onChange={() => setClinicId(c.id)}
                className="mt-1 accent-[#8a5c45]"
              />
              <span className="text-sm leading-snug">
                <span className="block text-[11px] uppercase tracking-[0.15em] text-ink-soft">{c.side}</span>
                <span className="block font-medium text-ink">{c.name}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="iletisim-ad" className="block text-sm font-medium text-ink mb-1.5">
          Adınız
        </label>
        <input
          id="iletisim-ad"
          type="text"
          autoComplete="name"
          maxLength={60}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="iletisim-mesaj" className="block text-sm font-medium text-ink mb-1.5">
          Kısa mesajınız
        </label>
        <textarea
          id="iletisim-mesaj"
          rows={3}
          maxLength={300}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Örn. 4 yaşındaki kızım için randevu almak istiyorum."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <p className="text-xs text-ink-soft leading-relaxed">
        Mesajınız sitemizde saklanmaz; WhatsApp üzerinden doğrudan kliniğe iletilir. Lütfen tanı, ilaç, rapor gibi
        sağlık bilgilerinizi bu mesajda paylaşmayınız, bunları randevuda hekime iletebilirsiniz.{' '}
        <Link href="/kvkk-aydinlatma-metni" className="text-mint underline underline-offset-2">
          KVKK Aydınlatma Metni
        </Link>
      </p>

      <button
        type="submit"
        disabled={!ready}
        className="rounded-full bg-ink text-cream text-sm font-medium px-7 py-3.5 min-h-12 hover:bg-mint transition-colors disabled:bg-ink/40 disabled:cursor-not-allowed"
      >
        WhatsApp ile Gönderiniz
      </button>
    </form>
  );
}
