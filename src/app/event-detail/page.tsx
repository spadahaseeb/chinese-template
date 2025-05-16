"use client";
import Button from "@/components/shared/Button";
import ConsentPagePopup from "@/components/shared/popup/ConsentPagePopup";
import EventApplicationPopup from "@/components/shared/popup/EventApplicationPopup";
import LoginPopup from "@/components/shared/popup/LoginPopup";
import { useState } from "react";

const eventDetail = () => {
  const [isLoginPopup, setIsLoginPopup] = useState<boolean>(false);
  const [isEventApplicationPopup, setIsEventApplicationPopup] =
    useState<boolean>(false);
  const [isConsentPagePopup, setIsConsentPagePopup] = useState<boolean>(false);

  return (
    <>
      <section className="bg-blue-primary">
        <div className="container pt-10">
          {/* heading  */}
          <div className="text-center">
            <h2 className="md:text-[28px] text-[20px] font-bold leading-[120%] tracking-[2%] text-white-primary">
              [이벤트 참여] 2025 이벤트를 진행합니다!
            </h2>
            <p className="text-black-tertiary md:text-[14px] text-[12px] font-normal tracking-[-3%] leading-[120%] pt-3">
              신청 기간 | YYYY-MM-DD HH:MM ~ YYYY-MM-DD HH:MM
            </p>
          </div>

          {/* content  */}
          <main className="py-6">
            {/* event-preview card */}
            <div className="md:p-10 py-6 px-3 border-y-1 border-black-secondry">
              <div
                className="w-full lg:h-[1135px] md:h-[880px] h-[340px] bg-accent-pinktone 
                flex items-center justify-center"
              >
                <p className="md:text-[24px] text-[14px] font-medium tracking-[-3%] leading-[140%] text-black-primary">
                  이벤트 상세이미지
                </p>
              </div>
            </div>
          </main>

          {/* button container */}
          <div className="flex justify-center md:pb-[100px] pb-[73px]">
            {/* button  */}
            <div className="generic-button-wrapper w-full xs:w-[max-content]">
              <Button
                variant="v1"
                buttonText="이벤트 신청하기"
                className="py-[14px] xs:px-[100px] px-0 w-full"
                onClick={() => setIsLoginPopup(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {isLoginPopup && (
        <div className="z-20 fixed w-full h-full top-0 left-0 right-0 bg-blue-primary/40 flex items-center justify-center">
          <LoginPopup
            onClick={() => [
              setIsLoginPopup(false),
              setIsEventApplicationPopup(true),
            ]}
          />
        </div>
      )}
      {isEventApplicationPopup && (
        <div className="z-20 fixed w-full h-full top-0 left-0 right-0 bg-blue-primary/40 flex items-center justify-center">
          <EventApplicationPopup
            onClick={() => [
              setIsEventApplicationPopup(false),
              setIsConsentPagePopup(true),
            ]}
          />
        </div>
      )}
      {isConsentPagePopup && (
        <div className="z-20 fixed w-full h-full top-0 left-0 right-0 bg-blue-primary/40 flex items-center justify-center">
          <ConsentPagePopup onClick={() => setIsConsentPagePopup(false)} />
        </div>
      )}
    </>
  );
};

export default eventDetail;
