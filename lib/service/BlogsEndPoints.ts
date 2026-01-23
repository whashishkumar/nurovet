import { apiFetch, apiPost } from '../api/fetcher';

export const BlogEndPoints = {
  blogList: (page: number) => {
    return apiFetch({
      endpoint: `posts?page=${page}&per_page=2`,
      cache: 'no-store',
    });
  },

  // /api/v1/posts/{slug}
  blogDetails: (slug: string) => {
    return apiFetch({
      endpoint: `posts/${slug}`,
      cache: 'no-store',
    });
  },

  tags: () => {
    return apiFetch({
      endpoint: 'tags',
      cache: 'no-store',
    });
  },

  categories: () => {
    return apiFetch({
      endpoint: 'categories',
      cache: 'no-store',
    });
  },

  recentPosts: () => {
    return apiFetch({
      endpoint: 'recent-posts',
      cache: 'no-store',
    });
  },
};
