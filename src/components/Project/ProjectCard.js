import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function TechStackCarousel({ project }){

    return (
        <Carousel responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
            arrows={false}
        >
            {project.stack.map((item, i) => {
                return(
                    <div key={i} className="border rounded mb-10">
                        <h3 className="border-b text-white hover:text-magenta-light p-3">{item.type}</h3>
                        <div className="h-24 flex items-center text-center px-2">
                            <ul className="flex flex-wrap items-center text-center justify-between w-full">
                                {item.tools.map((tool, index) => (
                                    <li key={index} className="w-1/3 text-magenta box-border py-2">{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
}

function ImageGallery({ project }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const scrollRef = useRef(null);


    const scrollByImage = (direction) => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const imageWidth = 192; // Adjust based on your image/card width (e.g., w-48 = 192px)
        scrollContainer.scrollBy({
            left: direction * imageWidth,
            behavior: 'smooth'
        });
    };


  return (
    <div className="relative w-full">
        <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-6 max-w-[1200px]"
            style={{ scrollbarWidth: "none" }}
        >
            {project.images.map((img, i) => {
                const isHovered = hoveredIndex === i;
                const isOther = hoveredIndex !== null && hoveredIndex !== i;

                    return (

                        <div
                            key={i}
                            className={`relative flex-shrink-0 max-h-full rounded overflow-hidden transition-all duration-300 ${
                                isHovered ? "z-10 p-3" : isOther ? "scale-95 opacity-80" : "mx-2"
                            }`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`object-contain transition-transform duration-300 ${
                                    isHovered ? "h-full max-h-[500px]" : isOther ? "h-32" : "h-40"
                                }`}
                            />
                            {isHovered && (
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-65 text-white text-sm px-3 py-2 text-center">
                                    {img.caption}
                                </div>
                            )}
                        </div>
                    
                    );
            })}
        </div>
     {/* ⬅️ Left Arrow */}
    <button
        onClick={() => scrollByImage(-1)}
        className="absolute top-24 left-2 -translate-y-1/2 z-50 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
        style={{ pointerEvents: 'auto' }}
    >
        ←
    </button>

    {/* ➡️ Right Arrow */}
    <button
        onClick={() => scrollByImage(1)}
        className="absolute top-24 right-2 -translate-y-1/2 z-50 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
        style={{ pointerEvents: 'auto' }}
    >
        →
    </button>
  </div>
  );
}

const ExpandedCard = ({ project }) => {
    return (
        <div className="mt-4">
            {project.images?.length > 0 && 
                < ImageGallery project={project} />
            }
            <h2 className="text-3xl font-semibold text-magenta-light py-3">{project.title}</h2>
            <TechStackCarousel project={project} />
            <p className="text-white py-3">{project.description}</p>
            {project.liveLink && (
                <Link to={project.liveLink} className="inline-block mt-6 px-6 py-2 mx-3 bg-magenta text-white font-semibold rounded-xl hover:bg-magenta/80 transition">
                    Live App
                </Link>
            )}
            {project.repoLink && (
                <Link to={project.repoLink} className="inline-block mt-6 px-6 py-2 mx-3 bg-magenta text-white font-semibold rounded-xl hover:bg-magenta/80 transition">
                    Repo
                </Link>
            )}
        </div>
    );
}


const ProjectCard = ({ project, isExpanded, setExpandedId }) =>{
    const cardRef = useRef(null);
    const toggleExpand = () => {
        setExpandedId(isExpanded ? null : project.id); // toggle
    };

    useEffect(() => {
        if (isExpanded && cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [isExpanded]);

    return (
        <div 
            ref={cardRef}
            className={`border rounded shadow p-4 relative bg-black border-faebot-surface ${isExpanded  ? 'col-span-full' : ''}`}>
        {!isExpanded && (
            <div className="flex flex-col justify-between">
                <img
                    src={project.displayImg}
                    alt={project.imageAlt}
                    className="rounded-md object-contain w-full max-h-[300px]"
                />
                <h2 className="text-xl font-semibold text-magenta pt-3">{project.title}</h2>
                <p className="text-sm text-faebot-text py-2">{project.summary}</p>

                <button
                    onClick={toggleExpand}
                    className="mt-4 self-center inline-block bg-magenta hover:bg-magenta-light text-white font-semibold py-1 px-4 rounded transition duration-200"
                >
                    See More
                </button>
            </div>
        )}

            {isExpanded && (
                <ExpandedCard project={project}/>
            )}
        </div>
    );
}


export default ProjectCard;