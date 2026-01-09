import Image from 'next/image';

export default function FeaturesCards({ featuresData }: any) {
  return (
    <section className="bg-color py-16">
      <div className="wrapper mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuresData?.map((item: any, idx: any) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00603A]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-normal text-[#000000] mb-2">{item.title}</h3>
              <p className="text-base text-[#000000] leading-relaxed figtree">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
