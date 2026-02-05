
import BlogDetail from '@/components/Articles/BlogDetail';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';

export default async function Page( {params} :any) {
  const  {slug}  = await  params;
  const resp = await BlogEndPoints.blogDetails(slug);
  const { bgImage,title } = resp || {};

  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: `${bgImage}`,
          },
          title: title,
        }}
        className="bg-color"
      />

      <BlogDetail  />
    </div>
  );
}

