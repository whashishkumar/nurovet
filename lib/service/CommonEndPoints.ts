import { apiFetch } from '../api/fetcher';

export const CommonEndPoints = {
  footerResponse: () => {
    return apiFetch({
      endpoint: 'footer-menu',
      cache: 'no-store',
    });
  },
};
