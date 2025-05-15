export type NavigationPropType = {
  data: {
    id: number;
    title: string;
    href: string;
  }[];
  className?: string;
};

export type ButtonPropType = {
  hover?: boolean | undefined;
  className?: string;
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "default";
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  butonLink?: string;
  buttonIconClassName?: string;
  buttonTextClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  iconPosition?: "left" | "right";
};

export type EventsShowcasePropType = {
  data: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date?: string;
    location?: string;
  }[];
  className?: string;
};
