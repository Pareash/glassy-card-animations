
import React from "react";
import GlassCard from "./GlassCard";

// Component for showcasing the BCG-style card with the custom uploaded image
const CardWithCustomImage = () => {
  // Use the uploaded image URL
  const uploadedImageUrl = "/lovable-uploads/a8dee134-b148-4466-8cc8-a87bfbb25079.png";

  return (
    <div className="max-w-md mx-auto">
      <GlassCard 
        imageUrl={uploadedImageUrl}
        category="ARTICLE"
        date="NOVEMBER 7, 2024"
        title="GenAI Will Fail. Prepare for It."
        buttonText="Read More"
        onClick={() => console.log("Card clicked")}
      />
    </div>
  );
};

export default CardWithCustomImage;
