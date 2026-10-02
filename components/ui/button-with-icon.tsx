import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonWithIconProps extends ButtonProps {
  text: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ className, text, iconBgColor, iconTextColor, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer",
          className
        )}
        {...props}
      >
        <span className="relative z-10 transition-all duration-500">
          {text}
        </span>
        <div 
          className={cn(
            "absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
            !iconBgColor && "bg-background",
            !iconTextColor && "text-foreground"
          )}
          style={{
            backgroundColor: iconBgColor,
            color: iconTextColor,
          }}
        >
          <ArrowUpRight size={16} />
        </div>
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";
export default ButtonWithIcon;
