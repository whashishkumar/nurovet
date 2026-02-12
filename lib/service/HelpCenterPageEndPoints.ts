import { apiFetch } from '../api/fetcher';

export const HelpCenterPageEndPoints = {
  heroBanner: () => {
    return apiFetch({
      endpoint: 'page/help-center/hero',
      cache: 'dynamic',
    });
  },

  services: () => {
    return apiFetch({
      endpoint: 'page/help-center/services',
      cache: 'dynamic',
    });
  },

  emergency: () => {
    return apiFetch({
      endpoint: 'page/help-center/emergency',
      cache: 'dynamic',
    });
  },

  bannerSection: () => {
    return apiFetch({
      endpoint: 'page/help-center/banner',
      cache: 'dynamic',
    });
  },

  features: () => {
    return apiFetch({
      endpoint: 'page/help-center/features',
      cache: 'dynamic',
    });
  }

};
