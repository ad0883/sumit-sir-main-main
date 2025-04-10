import React, { useState, useEffect, useCallback } from 'react';
import '../../../css/components/TestimonialCarousel/TestimonialCarousel.css';

const testimonials = [
    {
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "Hellen Jummy",
        title: "Team Lead",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "David Oshodi",
        title: "Manager",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "David Oshodi",
        title: "Manager",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        name: "Sarah Brown",
        title: "Product Designer",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const totalCards = testimonials.length;

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, [totalCards]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }, [totalCards]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide effect (only on mobile and not paused)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile || isPaused) return;

        const interval = setInterval(goToNext, 3000);
        return () => clearInterval(interval);
    }, [isMobile, isPaused, goToNext]);

    return (
        <section className="carousel-section" aria-label="Testimonials">
            <h1>
                Our partners. Our Friends.
                <br />
                They love us.
            </h1>

            <div
                className="carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="carousel-stage">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`card ${index === currentIndex ? 'center' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <p>{testimonial.text}</p>
                            <div className="profile">
                                <img src={testimonial.avatar} alt={testimonial.name} />
                                <div className="profile-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-controls">
                    <button className="carousel-arrow prev" onClick={goToPrev} aria-label="Previous">
                        &lt;
                    </button>
                    <div className="carousel-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button className="carousel-arrow next" onClick={goToNext} aria-label="Next">
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
