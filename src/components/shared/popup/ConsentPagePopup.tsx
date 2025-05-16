import Button from "@/components/shared/Button";

const ConsentPagePopup = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <div className="generic-button-wrapper">
        <div className="bg-blue-primary w-full h-full p-5 rounded-lg">
          {/* alert text  */}
          <p className="p-2 pb-0 text-center text-[14px] font-medium text-white-primary tracking-[-3%] leading-[120%]">
            마케팅 수신에 동의한 회원만 이벤트 참여가 가능합니 <br /> 다. 동의
            페이지로 이동하시겠습니까?
          </p>

          <div className="pt-6 flex items-center gap-3">
            <div onClick={onClick}>
              <Button
                variant="v2"
                buttonText="취소"
                className="py-[14px] px-[58px]"
              />
            </div>
            <div className="generic-button-wrapper" onClick={onClick}>
              <Button
                variant="v1"
                buttonText="확인"
                className="py-[14px] px-[58px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsentPagePopup;
