import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/sections/Gallery.css";

const Gallery = () => {
  const galleryItems = [
    { image: "/assets/img/ss/1.png" },
    { image: "/assets/img/ss/2.png" },
    { image: "/assets/img/ss/3.png" },
    { image: "/assets/img/ss/4.png" },
    { image: "/assets/img/ss/5.png" },
    { image: "/assets/img/ss/6.png" },
    { image: "/assets/img/ss/7.png" },
    { image: "/assets/img/ss/8.png" },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>App Gallery</h2>
          <p>Take a tour through our app's features and interface</p>
        </div>

        <div className="gallery-container" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-item">
                  <img
                    src={item.image}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg shadow-md"
                    style={{ width: "150px", height: "auto", objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
