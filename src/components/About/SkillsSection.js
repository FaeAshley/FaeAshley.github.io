import Carousel from "react-multi-carousel";

const Skills = ({ skills }) => {
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
    return (
        <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
            arrows={false}
        >
            {skills.map((skill, index) => {
                return (
                    <div key={index} className="p-3 bg-opacity-40 rounded-lg border border-gray-500 h-44 mt-4 mb-6">
                        <h2 className="text-xl font-bold text-magenta border-b hover:text-white">{skill.type}</h2>
                        {Array.isArray(skill.languages) && skill.languages.length > 0 && (
                        <p className="mt-2">
                            <span className="text-magenta-light font-semibold hover-text-magenta-light">Languages:</span> {skill.languages.join(', ')}
                        </p>
                        )}
                        {Array.isArray(skill.tools) && skill.tools.length > 0 && (
                        <p className="mt-2">
                            <span className="text-magenta-light font-semibold hover-text-magenta-light">Tools:</span> {skill.tools.join(', ')}
                        </p>
                        )}
                        {Array.isArray(skill.frameworks) && skill.frameworks.length > 0 && (
                        <p className="mt-2">
                            <span className="text-magenta-light font-semibold hover-text-magenta-light">Frameworks:</span> {skill.frameworks.join(', ')}
                        </p>
                        )}
                    </div>
                );
            })}
        </Carousel>
    );
}

export default Skills;