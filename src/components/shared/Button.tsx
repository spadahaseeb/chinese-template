import { ButtonPropType } from "@/assets/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const Button = ({
  buttonText,
  buttonIcon,
  butonLink,
  variant,
  className,
  onClick,
  buttonIconClassName,
  buttonTextClassName,
  children,
  type,
  disabled,
  iconPosition,
}: ButtonPropType) => {
  const Content = () => (
    <div>
      {buttonIcon && (
        <span className={twMerge("", buttonIconClassName)}>{buttonIcon}</span>
      )}
      {buttonText && (
        <p className={twMerge("", buttonTextClassName)}>{buttonText}</p>
      )}
    </div>
  );

  return butonLink ? (
    <Link
      href={butonLink || "/"}
      className={twMerge("group", ButtonVariant({ variant, className }))}
    >
      <Content />
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={twMerge("group", ButtonVariant({ variant, className }))}
    >
      <Content />
    </button>
  );
};

export default Button;

// tailwind-variants
const ButtonVariant = tv({
  base: "ease-out duration-300 relative capitalize text-center flex items-center justify-center",
  variants: {
    variant: {
      v1: "w-[148px] h-[42px] text-[15px] font-medium border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-black",
      v2: "w-[161px] h-[54px] bg-accent-gold text-black text-[15px] rounded-normal font-medium",
      v3: "w-[51px] h-[51px] rounded-full font-medium",
      v4: "w-10 h-10 bg-white text-black text-[13px] rounded-full font-normal",
      v5: "w-[max-content] h-[max-content] border-black text-black hover:bg-black-deep hover:text-white border-black border-1 rounded-full hover:border-transparent",
      default: "w-[max-content] h-[max-content]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
