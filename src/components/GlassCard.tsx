
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GlassCardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
}

const GlassCard = ({
  imageUrl,
  category,
  date,
  title,
  description = "Additional details about this content will appear when you hover.",
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Category & Date - Visible by default at top, disappear on hover */}
      <div className={cn(
        "absolute flex justify-between p-4 z-20 w-full transition-all duration-500",
        isHovered ? "opacity-0" : "top-0 opacity-100"
      )}>
        <div className="uppercase text-xs font-semibold tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm animate-fade-in">
          {category}
        </div>
        <div className="text-white/70 text-sm animate-fade-in">{date}</div>
      </div>

      {/* Glass Container - Default Size (35% height), Expands to fill entire card on hover */}
      <div 
        className={cn(
          "absolute glass-dark p-6 z-10 transition-all duration-500 ease-out",
          isHovered 
            ? "inset-0 rounded-2xl" // Full card with no margin when hovered
            : "bottom-0 left-0 right-0 h-[35%] rounded-xl mx-3 mb-3" // Default state with margins
        )}
      >
        {/* Title - Always Visible */}
        <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
        
        {/* Category & Date - Appears below title on hover */}
        <div className={cn(
          "flex justify-between text-white/80 mb-3",
          "opacity-0 max-h-0 overflow-hidden transition-all duration-500",
          isHovered && "opacity-100 max-h-[50px]"
        )}>
          <div className="text-sm">{category}</div>
          <div className="text-sm">{date}</div>
        </div>
        
        {/* Description - Visible on Hover */}
        <p className={cn(
          "text-white/80 line-clamp-3 text-sm",
          "opacity-0 max-h-0 overflow-hidden transition-all duration-500",
          isHovered && "opacity-100 max-h-[200px]"
        )}>
          {description}
        </p>

        {/* Button - Visible on Hover, positioned at bottom right */}
        <button
          onClick={onClick}
          className={cn(
            "mt-4 flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full",
            "font-medium text-base group/button",
            "opacity-0 transform translate-y-4 transition-all duration-500",
            isHovered && "opacity-100 translate-y-0 absolute bottom-6 right-6"
          )}
        >
          <ArrowRight 
            size={20} 
            className={cn(
              "transition-all duration-500 ease-in-out",
              "group-hover/button:translate-x-[-100px] group-hover/button:opacity-0",
              "relative group-hover/button:left-[120px]"
            )}
          />
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight 
            size={20} 
            className={cn(
              "absolute transition-all duration-500 ease-in-out opacity-0",
              "group-hover/button:opacity-100 group-hover/button:translate-x-[-85px]"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default GlassCard;
