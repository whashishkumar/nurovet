import { apiFetch } from '../api/fetcher';

const HomePageEndPoints = {
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
};
