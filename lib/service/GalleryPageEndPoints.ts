import { apiFetch } from '../api/fetcher';

export const GalleryPageEndPoints = {
  heroBanner: () => {
    return apiFetch({
      endpoint: 'page/gallery/hero',
      cache: 'dynamic',
    });
  },

  gallery: () => {
    return apiFetch({
      endpoint: 'page/gallery/gallery',
      cache: 'dynamic',
    });
  },
  // /api/v1/page/gallery/faq
  faq: () => {
    return apiFetch({
      endpoint: 'page/gallery/faq',
      cache: 'dynamic',
    });
  },
};
