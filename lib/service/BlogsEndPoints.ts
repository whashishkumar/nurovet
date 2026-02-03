import { apiFetch, apiPost } from '../api/fetcher';

export const BlogEndPoints = {
  blogList: (page: number) => {
    return apiFetch({
      endpoint: `posts?page=${page}`,
      cache: 'no-store',
    });
  },

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

  comments: (slug: string, data: any) => {
    return apiPost(`posts/comments/${slug}`,data)
  },


  getComments: (slug: string) => {
    return apiFetch({
      endpoint: `posts/comments/${slug}`,
      cache: 'no-store',  
    })
  },

  getfilteredPosts: (  search?:any, tag?: string, category?: string) => {
    return apiFetch({
      endpoint: `/posts/filters?search=${search}&tag=${tag}&category=${category}`,
      cache: 'no-store',
    });
  },

};
