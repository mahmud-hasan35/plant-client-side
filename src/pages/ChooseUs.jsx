import React from "react";
import { Leaf } from "lucide-react"; // pata logo

export default function ChooseUs() {
  const cards = [
    {
      id: "01",
      title: "Quality Workmanship",
      desc: "Our commitment to quality is evident in every service we provide. We use only the best materials, plants, and tools to your garden.",
    },
    {
      id: "02",
      title: "Sustainable Practices",
      desc: "We care for the environment and use eco-friendly solutions to maintain your garden responsibly.",
    },
    {
      id: "03",
      title: "Expert Team",
      desc: "Our skilled team brings knowledge and passion to create the garden of your dreams.",
    },
    {
      id: "04",
      title: "Affordable Pricing",
      desc: "We provide high-quality services at fair prices so everyone can enjoy a beautiful garden.",
    },
    {
      id: "05",
      title: "Personalized Service",
      desc: "Every garden is unique, and we tailor our services to meet your specific needs.",
    },
    {
      id: "06",
      title: "Customer Satisfaction",
      desc: "We prioritize your happiness, ensuring that you love the final results every time.",
    },
  ];

  return (
    <div className="py-12">
      {/* Top Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-[#B1F3B1] rounded-2xl py-2 px-4 text-[#4C924C] font-bold">
          Why choose us
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-center text-[#4C924C] text-4xl font-bold mb-10">
        Our Commitment to Excellence
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`rounded-2xl p-6 flex justify-between items-start shadow-md ${
              index < 3 ? "bg-[#006400] text-white" : "bg-[#B1F3B1] text-[#004d00]"
            }`}
          >
            {/* Left side with leaf + content */}
            <div>
              <Leaf className="w-8 h-8 mb-3" />
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </div>
            {/* Right side number */}
            <span className="text-4xl font-bold opacity-80">{card.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
