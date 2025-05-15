import { EventsShowcasePropType } from "@/assets/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const EventsShowcase = ({ data, className }: EventsShowcasePropType) => {
  return (
    <section className={twMerge("bg-blue-primary py-10", className)}>
      <div className="container">
        <main className="grid grid-cols-3 gap-6">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden bg-white-primary"
              >
                <div className="flex items-center gap-4">
                  <a href="#" className="decoration-none">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={384}
                      height={216}
                      className="object-cover w-full h-[216px]"
                    />
                  </a>
                </div>

                <div className="py-4 px-2">
                  <h4 className="pb-3 h-[46px]">
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
