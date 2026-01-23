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
};
