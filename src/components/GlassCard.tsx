
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface GlassCardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
}

const GlassCard = ({
  imageUrl,
  category,
  date,
  title,
  buttonText = "Read More",
  onClick,
  className,
}: GlassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl w-full max-w-md aspect-[3/4] group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Glass Expansion Effect */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 w-[95%] h-[95%] rounded-2xl opacity-0",
          "glass-dark pointer-events-none -z-10",
          isHovered && "animate-glass-expand"
        )}
      />

      {/* Card Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
        <div className="space-y-3">
          {/* Category & Date */}
          <div className="flex items-center justify-between opacity-0 group-hover:animate-fade-in">
            <div className="uppercase text-xs font-semibold tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {category}
            </div>
            <div className="text-white/70 text-sm">{date}</div>
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:animate-fade-up">
            {title}
          </h3>

          {/* Button */}
          <button
            onClick={onClick}
            className={cn(
              "mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full",
              "font-medium text-sm opacity-0 transform translate-y-4",
              "transition-all duration-300 ease-out hover:bg-gray-100",
              isHovered && "animate-button-reveal"
            )}
          >
            {buttonText}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
