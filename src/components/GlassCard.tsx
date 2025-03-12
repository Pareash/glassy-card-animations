
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
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Category & Date - Always Visible */}
      <div className="absolute top-0 left-0 right-0 flex justify-between p-4 z-20">
        <div className="uppercase text-xs font-semibold tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm animate-fade-in">
          {category}
        </div>
        <div className="text-white/70 text-sm animate-fade-in">{date}</div>
      </div>

      {/* Glass Container - Default Size (35% height) */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[35%] glass-dark p-6 z-10 rounded-xl mx-3 mb-3",
          "transition-all duration-300 ease-out",
          isHovered && "h-[calc(100%-24px)] mx-3 my-3" // Expand to full card minus margins when hovered
        )}
      >
        {/* Title - Always Visible */}
        <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
        
        {/* Description - Visible on Hover */}
        <p className={cn(
          "text-white/80 line-clamp-3 text-sm",
          "opacity-0 max-h-0 overflow-hidden transition-all duration-300",
          isHovered && "opacity-100 max-h-[200px]"
        )}>
          {description}
        </p>

        {/* Button - Visible on Hover */}
        <button
          onClick={onClick}
          className={cn(
            "mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full",
            "font-medium text-sm group/button",
            "opacity-0 transform translate-y-4 transition-all duration-300",
            isHovered && "opacity-100 translate-y-0"
          )}
        >
          {buttonText}
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default GlassCard;
