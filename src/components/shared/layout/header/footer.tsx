import LionIcon from "@/assets/svg/Lion-icon";
import MatchIcon from "@/assets/svg/Match-icon";
import MediaIcon from "@/assets/svg/Media-icon";
import PersonIcon from "@/assets/svg/Person-icon";
import ShopingIcon from "@/assets/svg/Shoping-icon";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t-1 border-black-secondry bg-blue-primary block md:hidden">
        <main className="grid grid-cols-5 gap-3">
          {[
            {
              id: 1,
              icon: <LionIcon />,
              label: "home",
              link: "/",
            },
            {
              id: 2,
              icon: <MediaIcon />,
              label: "media",
              link: "/",
            },
            {
              id: 3,
              icon: <MatchIcon />,
              label: "Match",
              link: "/",
            },
            {
              id: 4,
              icon: <ShopingIcon />,
              label: "shopping",
              link: "/",
            },
            {
              id: 5,
              icon: <PersonIcon />,
              label: "my sefc",
              link: "/",
            },
          ].map((item) => (
            <Link
              href={item.link}
              className="py-[9px] px-3 flex flex-col items-center justify-center max-w-[75px]"
              key={item.id}
            >
              <div className="w-6 h-6 text-[24px] pb-[3px] translate-x-[-1px]">
                {item.icon}
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
