import { cn } from "@utils/cn";
import React from "react";

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text, className }) => {
  return (
    <div className={cn("badge", className)}>
      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
        {icon}

        <p className="whitespace-nowrap text-xs">{text}</p>
      </span>
    </div>
  );
};

export default Badge;

