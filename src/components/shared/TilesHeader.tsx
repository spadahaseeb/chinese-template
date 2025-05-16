"use client";
import { useEffect, useRef, useState } from "react";
import { TilesHeaderLinkContent } from "@/assets/content";
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";

const TilesHeader = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeItemRef.current && listRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
    const onMouseLeave = () => (isDown = false);
    const onMouseUp = () => (isDown = false);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="drop-shadow-[0_1px_8px_rgba(255,255,255,0.1)] lg:py-6 pt-6 pb-0 bg-blue-primary">
      <div className="container">
        {/* heading */}
        <div className="flex items-center justify-between">
          <h1 className="uppercase lg:text-[48px] sm:text-[30px] text-[18px] font-extrabold text-white-primary">
            FAN
          </h1>

          <div className="block 2xl:hidden py-[12px]">
            <X className="text-white-primary w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </div>
        </div>

        {/* links-tile */}
        <div className="lg:bg-white-tertiary lg:rounded-full mt-4 overflow-hidden">
          <ul
            ref={listRef}
            className="w-full flex items-center overflow-x-auto select-none headertile-scrollbar h-10 gap-2 lg:gap-0"
          >
            {TilesHeaderLinkContent.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li
                  key={item.id}
                  ref={isActive ? activeItemRef : null}
                  className={twMerge(
                    "flex-shrink-0 text-[16px] font-medium text-black-tertiary lg:w-[140px] text-center w-[max-content] py-[10px] px-[8px] border-transparent border-b-[2px]",
                    isActive
                      ? "lg:text-black-primary text-white-primary font-semibold border-white-primary lg:border-transparent"
                      : ""
                  )}
                >
                  <span
                    onClick={() => setActiveIndex(idx)}
                    className="cursor-pointer"
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TilesHeader;
