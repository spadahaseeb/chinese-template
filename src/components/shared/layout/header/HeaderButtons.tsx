// components

import { UserRound } from "lucide-react";
import Button from "@/components/shared/Button";
import { HeaderButtonsContent } from "@/assets/content";

const HeaderButtons = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        {HeaderButtonsContent.map((item) => (
          <div key={item.id}>
            <Button
              butonLink={item.href}
              buttonIcon={<item.icon className="w-6 h-6 text-white-primary" />}
              variant="default"
              className=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderButtons;
