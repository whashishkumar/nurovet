import { apiFetch, apiPost } from './fetcher';

export const CommonComponentData = {
  headerAPi: () => {
    return apiFetch({
      endpoint: '',
      cache: 'dynamic',
    });
  },
};
