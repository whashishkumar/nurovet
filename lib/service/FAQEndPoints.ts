import { apiFetch } from "../api/fetcher";

export const FAQPageEndPoints = {
  heroBanner: () => {
    return apiFetch({
      endpoint: "page/faq/hero",
      cache: "dynamic",
    });
  },

  faq: () => {
    return apiFetch({
      endpoint: "page/faq/faq",
      cache: "dynamic",
    });
  },

}