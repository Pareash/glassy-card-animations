
import React from "react";
import GlassCard from "@/components/GlassCard";
import { useToast } from "@/hooks/use-toast";

const cardData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Article",
    date: "November 7, 2024",
    title: "GenAI Will Fail. Prepare for It.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Insight",
    date: "October 12, 2024",
    title: "The Future of Digital Transformation",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Research",
    date: "September 21, 2024",
    title: "Rethinking Business Strategy in AI Era",
  },
];

const Index = () => {
  const { toast } = useToast();

  const handleCardClick = (title: string) => {
    toast({
      title: "Selected card",
      description: `You clicked on "${title}"`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center pt-20 pb-20">
      <header className="text-center mb-14">
        <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full inline-block mb-4">
          RESPONSIBLE AI
        </div>
        <h1 className="text-white text-5xl font-bold max-w-2xl">
          Explore Our Latest Insights on Technology and Innovation
        </h1>
      </header>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <GlassCard
              key={card.id}
              imageUrl={card.imageUrl}
              category={card.category}
              date={card.date}
              title={card.title}
              onClick={() => handleCardClick(card.title)}
              buttonText="Read More"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
