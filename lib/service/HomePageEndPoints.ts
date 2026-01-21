import { apiFetch } from '../api/fetcher';

export const HomePageEndPoints = {
  headerAPi: () => {
    return apiFetch({
      endpoint: 'navigation-menu',
      cache: 'dynamic',
    });
  },
  heroBanner: () => {
    return apiFetch({
      endpoint: 'section/home-hero-section',
      cache: 'dynamic',
    });
  },
  aboutSection: () => {
    return apiFetch({
      endpoint: 'section/home-about-section',
      cache: 'dynamic',
    });
  },

  featuresSection: () => {
    return apiFetch({
      endpoint: 'section/home-features-section',
      cache: 'dynamic',
    });
  },
  customSection: () => {
    return apiFetch({
      endpoint: 'section/home-custom-section',
      cache: 'dynamic',
    });
  },

  aiSection: () => {
    return apiFetch({
      endpoint: 'section/home-ai-section',
      cache: 'dynamic',
    });
  },

  remoteSection: () => {
    return apiFetch({
      endpoint: 'section/home-remote-section',
      cache: 'dynamic',
    });
  },

  mobileSection: () => {
    return apiFetch({
      endpoint: 'section/home-mobile-section',
      cache: 'dynamic',
    });
  },

  chooseSection: () => {
    return apiFetch({
      endpoint: 'section/home-choose-section',
      cache: 'dynamic',
    });
  },

  gallerySection: () => {
    return apiFetch({
      endpoint: 'section/home-gallery-section',
      cache: 'dynamic',
    });
  },

  testimonialSection: () => {
    return apiFetch({
      endpoint: 'section/home-testimonial-section',
      cache: 'dynamic',
    });
  },
  // api/v1/section/home-faq-section
  faqSection: () => {
    return apiFetch({
      endpoint: 'section/home-faq-section',
      cache: 'dynamic',
    });
  },

  // /api/v1/section/home-book-demo-section
  bookDemoSection: () => {
    return apiFetch({
      endpoint: 'section/home-book-demo-section',
      cache: 'dynamic',
    });
  },
  // /api/v1/section/home-articles-section
  articlesSection: () => {
    return apiFetch({
      endpoint: 'section/home-articles-section',
      cache: 'dynamic',
    });
  },
};
