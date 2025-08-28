import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  const slides = [
    {
      title: "🌿 Watering Wisdom",
      description: "Most indoor plants need watering once a week. Avoid overwatering!",
      bg: "https://img.freepik.com/free-vector/hand-drawn-tropical-leaves-background_23-2150652197.jpg",
    },
    {
      title: "🌱 Know Your Light",
      description: "Place your plants where they get the right amount of sunlight.",
      bg: "https://img.freepik.com/free-vector/floral-linear-design-background_23-2149130875.jpg?uid=R161801241&ga=GA1.1.995942618.1746438391&semt=ais_hybrid&w=740",
    },
    {
      title: "🌿 Choose the Right Pot",
      description: "Use pots with good drainage to prevent root rot.",
      bg: "https://img.freepik.com/free-vector/nature-background-with-golden-foil_52683-46947.jpg?uid=R161801241&ga=GA1.1.995942618.1746438391&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div className="max-w-full mx-auto my-8">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[200px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${slide.bg})`,
            }}
          >
            <div className=" rounded  max-w-xl text-center">
              <h2 className="text-4xl font-bold text-green-700 ">{slide.title}</h2>
              <p className="mt-4 text-gray-700 text-2xl font-semibold">{slide.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
