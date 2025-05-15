"use client";
import { useEffect, useRef } from "react";
import { TilesHeaderLinkContent } from "@/assets/content";
import { twMerge } from "tailwind-merge";

const TilesHeader = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const activeItemRef = useRef<HTMLLIElement>(null);

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
    <div className="drop-shadow-[0_1px_8px_rgba(255,255,255,0.1)] py-6 bg-blue-primary">
      <div className="container">
        {/* heading */}
        <div>
          <h1 className="uppercase text-[48px] font-extrabold text-white-primary">
            FAN
          </h1>
        </div>

        {/* links-tile */}
        <div className="bg-white-tertiary rounded-full mt-4 overflow-hidden">
          <ul
            ref={listRef}
            className="w-full flex items-center overflow-x-auto select-none headertile-scrollbar h-10"
          >
            {TilesHeaderLinkContent.map((item, idx) => {
              const isActive = idx === 0;
              return (
                <li
                  key={item.id}
                  ref={isActive ? activeItemRef : null}
                  className={twMerge(
                    "flex-shrink-0 text-[16px] font-medium text-black-tertiary 2xl:w-[140px]  w-[120px] relative",
                    isActive ? "text-black-primary font-semibold" : ""
                  )}
                >
                  <span className="w-[max-content] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 cursor-pointer">
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
