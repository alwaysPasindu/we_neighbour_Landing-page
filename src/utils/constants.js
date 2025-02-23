export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  FEATURES: '/features',
  GALLERY: '/gallery',
  TEAM: '/team',
  CONTACT: '/contact'
};

export const NAVIGATION_LINKS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.FEATURES, label: 'Features' },
  { path: ROUTES.GALLERY, label: 'Gallery' },
  { path: ROUTES.TEAM, label: 'Team' },
  { path: ROUTES.CONTACT, label: 'Contact' }
];

export const APP_CONFIG = {
  name: 'We Neighbour',
  description: 'Building stronger communities through technology',
  social: {
    twitter: 'https://twitter.com/weneighbour',
    facebook: 'https://facebook.com/weneighbour',
    instagram: 'https://instagram.com/weneighbour',
    linkedin: 'https://linkedin.com/company/weneighbour'
  }
};
