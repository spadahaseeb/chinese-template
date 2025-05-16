import Button from "@/components/shared/Button";

const EventApplicationPopup = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="generic-button-wrapper">
        <div className="bg-blue-primary w-full h-full p-5 rounded-lg">
          {/* alert text  */}
          <p className="p-2 pb-0 text-center text-[14px] font-medium text-white-primary tracking-[-3%] leading-[120%]">
            이벤트 신청은 {"{신청등급 명}"}, {"{신청등급 명}"} 회원만 가 <br />{" "}
            능합니다.
          </p>

          <div className="pt-6 flex items-center gap-3">
            <div className="generic-button-wrapper" onClick={onClick}>
              <Button
                variant="v1"
                buttonText="확인"
                className="py-[14px] px-[137px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventApplicationPopup;
