import Link from 'next/link';
import { clinics } from '@/data/clinics';

const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `© ${year} Dr. Ömer Özdemir. Tüm hakları saklıdır.`;

  return (
    <footer className="bg-ink text-cream/80 p-8 md:p-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="mb-4 font-serif text-lg text-cream">Dr. Ömer Özdemir</h2>
            <p className="mb-2">E-posta: ozdemirtarikomer@gmail.com</p>
            <div className="flex mt-4 space-x-4">
              <a href="https://linkedin.com/in/omertarikozdemir" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profili" className="text-cream/80 hover:text-mint-light transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/omertarikozdemir?igsh=MXRkanZremxtdWdkZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram profili" className="text-cream/80 hover:text-mint-light transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg text-cream mb-4">Klinikler</h3>
            <div className="space-y-4">
              {clinics.map((clinic) => (
                <div key={clinic.id}>
                  <span className="block text-xs uppercase tracking-[0.1em] text-cream/50 mb-1">
                    {clinic.side}
                  </span>
                  <p className="mb-0.5">{clinic.address}</p>
                  <a href={clinic.phoneHref} className="text-cream/80 hover:text-mint-light transition-colors">
                    {clinic.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg text-cream mb-4">Çalışma Saatleri</h3>
            <p className="mb-2">Pazartesi - Cuma: 10:00 - 19:00</p>
            <p className="mb-2">Cumartesi: 10:00 - 17:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-8 pt-4 text-center text-sm">
          <nav aria-label="Alt bilgi bağlantıları" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {[
              { href: '/sss', label: 'Sık Sorulan Sorular' },
              { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
              { href: '/kvkk-aydinlatma-metni', label: 'KVKK Aydınlatma Metni' },
              { href: '/cerez-politikasi', label: 'Çerez Politikası' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-cream/80 hover:text-mint-light transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 