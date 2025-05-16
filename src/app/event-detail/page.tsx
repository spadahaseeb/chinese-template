"use client";
import Button from "@/components/shared/Button";
import LoginPopup from "@/components/shared/popup/LoginPopup";
import { useState } from "react";

const eventDetail = () => {
  const [isLoginPopup, setIsLoginPopup] = useState<boolean>(false);

  return (
    <>
      {isLoginPopup && (
        <div className="z-20 fixed w-full h-full top-0 left-0 right-0 bg-blue-primary/40 flex items-center justify-center">
          <LoginPopup onClick={() => setIsLoginPopup(false)} />
        </div>
      )}

      <section className="bg-blue-primary">
        <div className="container pt-10">
          {/* heading  */}
          <div className="text-center">
            <h2 className="text-[28px] font-bold leading-[120%] tracking-[2%] text-white-primary">
              [이벤트 참여] 2025 이벤트를 진행합니다!
            </h2>
            <p className="text-black-tertiary text-[14px] font-normal tracking-[-3%] leading-[120%] pt-3">
              신청 기간 | YYYY-MM-DD HH:MM ~ YYYY-MM-DD HH:MM
            </p>
          </div>

          {/* content  */}
          <main className="py-6">
            {/* event-preview card */}
            <div className="p-10 border-y-1 border-black-secondry">
              <div
                className="w-full h-[1135px] bg-accent-pinktone 
                flex items-center justify-center"
              >
                <p className="text-[24px] font-medium tracking-[-3%] leading-[140%] text-black-primary">
                  이벤트 상세이미지
                </p>
              </div>
            </div>
          </main>

          {/* button container */}
          <div className="flex justify-center pb-[100px]">
            {/* button  */}
            <div className="generic-button-wrapper">
              <Button
                variant="v1"
                buttonText="이벤트 신청하기"
                className="py-[14px] px-[101px]"
                onClick={() => setIsLoginPopup(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default eventDetail;
