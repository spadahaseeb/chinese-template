import { ButtonPropType } from "@/assets/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const Button = ({
  buttonText,
  buttonIcon,
  butonLink,
  variant = "default",
  className,
  onClick,
  buttonIconClassName,
  buttonTextClassName,
  children,
  type,
  disabled,
  iconPosition,
}: ButtonPropType) => {
  const baseClasses = ButtonVariant({ variant });

  const content = (
    <>
      {buttonIcon && (
        <span className={twMerge("", buttonIconClassName)}>{buttonIcon}</span>
      )}
      {buttonText && (
        <span className={twMerge("", buttonTextClassName)}>{buttonText}</span>
      )}
      {children}
    </>
  );

  if (butonLink) {
    return (
      <Link
        href={butonLink || "/"}
        className={twMerge("group relative", baseClasses, className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={twMerge("group relative", baseClasses, className)}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;

const ButtonVariant = tv({
  base: "ease-out duration-300 rounded-lg text-[16px] font-semibold flex items-center justify-center",
  variants: {
    variant: {
      v1: "bg-gradient-to-b from-[#32376C] to-[#000321] text-white-primary text-[16px] font-semibold",
      v2: "bg-white-primary text-black-primary",
      v3: "bg-red-500 text-white py-3 px-6",
      v4: "bg-red-500 text-white py-3 px-6",
      v5: "bg-red-500 text-white py-3 px-6",
      default: "w-[max-content] h-[max-content] rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
