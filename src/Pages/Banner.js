import React, { useEffect, useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Banner.css'; 

const Banner = () => {
  const [stories, setStories] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli"
    )
      .then((response) => response.json())
      .then((data) => {
        setStories(data?.items[0]?.banners || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const items = stories.map((story) => (
    <div className="carousel-item" key={story.id}>
      <StoryCard image={story?.image} alt={story.title} title={story.title} />
    </div>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    660: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev-button" onClick={() => carouselRef.current.slidePrev()}>
        {'<'}
      </button>
      <AliceCarousel
        ref={carouselRef}
        mouseTracking
        infinite
        autoPlayInterval={500}
        animationDuration={2000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
      <button className="nav-button next-button" onClick={() => carouselRef.current.slideNext()}>
        {">"}
      </button>
    </div>
  );
};

const StoryCard = ({ image, alt, title }) => {
  return (
    <div className="banner-card">
      <img className="card-image" src={image} alt={alt} />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Banner;
