import Image from 'next/image';

export default function FeaturesCards({ featuresData }: any) {
  return (
    <section className="bg-color pt-12">
      <div className="wrapper m-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuresData?.map((item: any, idx: any) => (
            <div key={idx} className="rounded-[35px] bg-white p-6 ">
              <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#00603A] mb-4">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>
              <h3 className="text-lg font-normal text-[#000000] mb-2">{item.title}</h3>
              <p className="text-base text-[#000000] leading-relaxed figtree font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
