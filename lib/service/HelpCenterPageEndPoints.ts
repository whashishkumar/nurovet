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
};
