import { NavigationPropType } from "@/assets/types";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Navigation = ({ data, className }: NavigationPropType) => {
  return (
    <>
      <div className={twMerge("flex items-center gap-8", className)}>
        <div className="cursor-pointer">
          <AlignJustify
            className="w-[32px] h-[32px] text-white-primary"
            strokeWidth={1.5}
          />
        </div>

        <ul className="flex items-center gap-8">
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-white-primary text-[16px] font-bold uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
