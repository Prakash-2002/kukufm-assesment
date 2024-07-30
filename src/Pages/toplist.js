import React, { useEffect, useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Toplist.css";

const Toplist = () => {
  const [stories, setStories] = useState([]);
  const carouselRef = useRef(null);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    fetch(
      "https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli"
    )
      .then((response) => response.json())
      .then((data) => {
        
        setStories(data.items[3].mixed_content_items || []);
       console.log(data.items)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    460: {
      items: 2,
    },
    768: {
      items: 3,
    },1000: {
      items: 4,
    },
    
    1245: {
      items: 5,
    },
  };
  const items = stories.map((story) => (
    <div className="carousel-item" key={story.id}>
      <StoryCard
            key={story.id}
            image={story.image}
            alt={story.title}
            title={story.title}
            rating={story.overall_rating.toFixed(1)}
            duration={formatDuration(story.duration_s)}
          />
    </div>
  ));

  return (
 <div className="toplist-container">
      <h2 className="heading">Top 10 in India</h2>
      <div className="story-list">


<button className="Top-nav-button prev-button" onClick={() => carouselRef.current.slidePrev()}>
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
      <button className="Top-nav-button next-button" onClick={() => carouselRef.current.slideNext()}>
        {">"}
      </button>
      </div>
    </div>
   
  
   
  );
};

const StoryCard = ({ image, alt, title, rating, duration }) => {
  return (
    <div className="Toplist-card">
      <img src={image} alt={alt} className="Toplist-card-image" />
      <h3 className="Toplist-card-title">{title}</h3>
      <div className="Toplist-card-info">
        <span className="Toplist-card-rating">{rating} ⭐</span>
        <span className="Toplist-card-duration">{duration}</span>
      </div>
    </div>
  );
};

export default Toplist;
