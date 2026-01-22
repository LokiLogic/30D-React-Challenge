
import { useState } from 'react';
import './ImageSlider.css';

function ImageSlider() {
    const images= [
        {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Mountain sunset 🌄"
        },
        {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Tropical beach 🏖️"
        },
        {
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "Starry night 🌌"
        },
        {
        url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        caption: "forest 🍂"
        }

    ];
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    };

    return (
        <div className='slider-container'>
            <h2>Image Slider</h2>
            <div className='slider-Frame'>
                <button className='nav-btn left-btn' onClick={prevSlide}>❮</button>
                <div className='image-content'>
                    <img src={images[currentIndex].url} alt={images[currentIndex].caption} />
                    <div className='caption'>
                        <p>{images[currentIndex].caption}</p>
                    </div>
                </div>
                <button className='nav-btn right-btn' onClick={nextSlide}>❯</button>
                <div className='dots-container'>
                    {images.map((_, index) => (
                        <div key={index} className={`dot ${currentIndex === index ? 'active-dot' : ''}`} onClick={() => setCurrentIndex(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ImageSlider;