const rawSiteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://adiban.digital';

export const siteConfig = {
  name: 'Adiban Digital',
  url: rawSiteUrl.replace(/\/$/, ''),
  email: 'adibandigital@gmail.com',
  whatsappDisplay: '+66 81 085 1211',
  whatsappHref: 'https://wa.me/66810851211',
  location: 'Phuket, Thailand',
  address: [
    '7/7 Moo 8, Aoyon Khaokad',
    'T. Wichit, A. Muang Phuket 83000',
    'Thailand',
  ],
  tagline: 'IT systems, automation, dashboards, and websites for growing businesses.',
} as const;

export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address.join(', ')
)}`;
