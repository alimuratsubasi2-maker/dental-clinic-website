import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Tedaviler', href: getPermalink('/#tedaviler') },
    { text: 'Nasıl Çalışıyoruz', href: getPermalink('/#surec') },
    { text: 'Yorumlar', href: getPermalink('/#yorumlar') },
    { text: 'Sık Sorulanlar', href: getPermalink('/#sss') },
    { text: 'İletişim', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Randevu Al', href: getPermalink('/contact#form') }],
};

export const footerData = {
  links: [
    {
      title: 'Tedaviler',
      links: [
        { text: 'İmplant', href: getPermalink('/#tedaviler') },
        { text: 'Ortodonti', href: getPermalink('/#tedaviler') },
        { text: 'Diş Beyazlatma', href: getPermalink('/#tedaviler') },
        { text: 'Çocuk Diş Hekimliği', href: getPermalink('/#tedaviler') },
      ],
    },
    {
      title: 'Klinik',
      links: [
        { text: 'Nasıl Çalışıyoruz', href: getPermalink('/#surec') },
        { text: 'Hasta Yorumları', href: getPermalink('/#yorumlar') },
        { text: 'Sık Sorulanlar', href: getPermalink('/#sss') },
      ],
    },
    {
      title: 'İletişim',
      links: [
        { text: 'Randevu Al', href: getPermalink('/contact#form') },
        { text: '0216 000 00 00', href: 'tel:+902160000000' },
        { text: 'WhatsApp', href: 'https://wa.me/905000000000' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'KVKK Aydınlatma Metni', href: getPermalink('/privacy') },
    { text: 'Kullanım Koşulları', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/905000000000' },
  ],
  footNote: `
    © Gülüş Diş Kliniği (örnek site) · <span class="opacity-70">made with <a class="underline" href="https://alimuratsubasi2-maker.github.io/fiyat-listesi/">NovaDijitalTR</a></span>
  `,
};
