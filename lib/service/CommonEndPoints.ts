import { apiFetch } from '../api/fetcher';

export const CommonEndPoints = {
  footerResponse: () => {
    return apiFetch({
      endpoint: 'footer-menu',
      cache: 'no-store',
    });
  },
  footerBannerSection: () => {
    return apiFetch({
      endpoint: 'section/footer-banner-section',
      cache: 'no-store',
    });
  },
};
