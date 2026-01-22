import { apiFetch } from '../api/fetcher';

export const AboutPageEndPoints = {
  heroBanner: () => {
    return apiFetch({
      endpoint: 'page/about-us/hero',
      cache: 'dynamic',
    });
  },

  ourStory: () => {
    return apiFetch({
      endpoint: 'page/about-us/story',
      cache: 'dynamic',
    });
  },

  testimonials: () => {
    return apiFetch({
      endpoint: 'page/about-us/testimonial',
      cache: 'dynamic',
    });
  },

  ourHistory: () => {
    return apiFetch({
      endpoint: 'page/about-us/history',
      cache: 'dynamic',
    });
  },
  ourWork: () => {
    return apiFetch({
      endpoint: 'page/about-us/work',
      cache: 'dynamic',
    });
  },

  reviews: () => {
    return apiFetch({
      endpoint: 'page/about-us/review',
      cache: 'dynamic',
    });
  },
};
