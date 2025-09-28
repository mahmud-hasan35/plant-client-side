import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  const slides = [
    {
      title: "🌿 Watering Wisdom",
      description:
        "Most indoor plants need watering once a week. Avoid overwatering!",
      bg: "https://i.ibb.co.com/v6WL3Ywn/pexels-1481873904-34021551.jpg",
    },
    {
      title: "🌱 Know Your Light",
      description:
        "Place your plants where they get the right amount of sunlight.",
      bg: "https://i.ibb.co.com/M5xQdQgW/pexels-roy-photos-3613833.jpg",
    },
    {
      title: "🌿 Choose the Right Pot",
      description: "Use pots with good drainage to prevent root rot.",
      bg: "https://i.ibb.co.com/BVTPB3KB/pexels-markusspiske-95214.jpg",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bg})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md animate-fade-in">
                {slide.title}
              </h2>
              <p className="mt-3 md:mt-5 text-sm md:text-lg lg:text-xl text-gray-200 max-w-2xl animate-fade-in delay-200">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
