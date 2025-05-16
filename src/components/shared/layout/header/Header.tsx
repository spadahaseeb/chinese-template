import { HeaderNavigationLinkContent } from "@/assets/content";
import Image from "next/image";
import Navigation from "@/components/shared/layout/header/Navigation";
import HeaderButtons from "@/components/shared/layout/header/HeaderButtons";

const Header = () => {
  return (
    <>
      <header className="bg-blue-primary py-[10px] hidden 2xl:block">
        <div className="container drop-shadow-[0_1px_8px_rgba(255,255,255,0.1)]">
          <div className="flex items-center justify-between">
            {/* navigation-&-logo-container  */}
            <div className="flex items-center">
              <Navigation data={HeaderNavigationLinkContent} />
              <div className="pl-[158px] px-[7px]">
                <a href="/">
                  <Image
                    src="/icons/logo.png"
                    alt="logo"
                    width={57}
                    height={72}
                    priority
                  />
                </a>
              </div>
            </div>

            {/* header-buttons */}
            <HeaderButtons />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
