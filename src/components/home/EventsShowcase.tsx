"use client";
import { useState } from "react";
import { EventsShowcasePropType } from "@/assets/types";
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const EventsShowcase = ({ data, className }: EventsShowcasePropType) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className={twMerge("bg-blue-primary", className)}>
      <div className="container py-10">
        <main className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-[15px]">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="rounded-lg overflow-hidden bg-white-primary"
              >
                <div className="flex items-center gap-4">
                  <a
                    href="/event-detail"
                    className="decoration-none block w-full"
                  >
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
                      href="/event-detail"
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

      {/* paginations  */}
      <div className="flex items-center w-[max-content] mx-auto md:pb-[100px] pb-6 gap-2">
        <button className="w-8 h-8 rounded-lg text-black-tertiary">
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={twMerge(
                "w-8 h-8 rounded-lg text-black-tertiary",
                currentPage === page && "bg-accent-brand text-white-primary"
              )}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="w-8 h-8 rounded-lg text-black-tertiary">
          <ChevronRight size={18} />
        </button>
        <button className="w-8 h-8 rounded-lg text-black-tertiary">
          <ChevronsRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default EventsShowcase;
