import { FooterLinkContent } from "@/assets/content";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t-1 border-black-secondry bg-blue-primary block md:hidden">
        <main className="grid grid-cols-5 gap-3 place-items-center">
          {FooterLinkContent.map((item) => (
            <Link
              href={item.link}
              className="py-[9px] px-3 flex flex-col items-center justify-center max-w-[75px]"
              key={item.id}
            >
              <div className="w-6 h-6 text-[24px] pb-[3px] translate-x-[-1px]">
                <item.icon />
              </div>
              <p className="w-[max-content] text-black-tertiary text-[10px] font-medium uppercase pt-[3px]">
                {item.label}
              </p>
            </Link>
          ))}
        </main>
      </footer>
    </>
  );
};

export default Footer;
