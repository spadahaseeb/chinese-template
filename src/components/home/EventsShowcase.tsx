import { EventsShowcasePropType } from "@/assets/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const EventsShowcase = ({ data, className }: EventsShowcasePropType) => {
  return (
    <section className={twMerge("bg-blue-primary py-10", className)}>
      <div className="container">
        <main className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-[15px]">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden bg-white-primary"
              >
                <div className="flex items-center gap-4">
                  <a href="#" className="decoration-none block w-full">
                    <Image
                      priority
                      width={384}
                      height={216}
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full 2xl:max-w-[384px] h-auto"
                    />
                  </a>
                </div>

                <div className="py-4 px-2">
                  <h4 className="pb-3 min-h-[46px]">
                    <a
                      href="#"
                      className="font-bold text-[18px] leading-[130%] tracking-[-3%]"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <p className="text-[14px] font-normal text-black-tertiary leading-[120%] tracking-[-3%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </main>
      </div>
    </section>
  );
};

export default EventsShowcase;
