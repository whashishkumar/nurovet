import { apiFetch, apiPost } from '../api/fetcher';

export const ContactUsEndPoints = {
  heroBanner: () => {
    return apiFetch({
      endpoint: 'page/contact/hero',
      cache: 'dynamic',
    });
  },

  contactDetails: () => {
    return apiFetch({
      endpoint: 'page/contact/contact',
      cache: 'dynamic',
    });
  },

  mapSection: () => {
    return apiFetch({
      endpoint: 'page/contact/map',
      cache: 'dynamic',
    });
  },

  services: () => {
    return apiFetch({
      endpoint: 'page/contact/services',
      cache: 'no-store',
    });
  },

  contactUsForm: (payload: any) => {
    return apiPost('contact-form', payload);
  },
};
