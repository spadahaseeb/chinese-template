"use client";
import { FreeMode } from "swiper/modules";
import { TilesHeaderLinkContent } from "@/assets/content";
import { SwiperSlide, Swiper } from "swiper/react";

const TilesHeader = () => {
  return (
    <>
      <div className="drop-shadow-[0_1px_8px_rgba(255,255,255,0.1)] py-6 bg-blue-primary">
        <div className="container">
          {/* heading  */}
          <div>
            <h1 className=" uppercase text-[48px] font-extrabold text-white-primary">
              FAN
            </h1>
          </div>

          {/* links-tile  */}
          <div className="bg-white-tertiary rounded-full mt-4">
            <ul className="overflow-x-scrollw-full flex items-center overflow-x-scroll headertile-scrollbar">
              {TilesHeaderLinkContent.map((item) => (
                <li
                  className="text-[16px] font-medium text-black-tertiary py-[9.5px] mx-7 mx-20 w-[max-content] cursor-pointer first:text-black-primary first:font-semibold select-none"
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TilesHeader;
