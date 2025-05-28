import { useState } from "react";
import { sections } from '../../data/about';
import { components } from '../../data/sectionComponents';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const Row = ({ section }) => {
    const [isOpen, setIsOpen] = useState(false);
    const SectionComponent = components[section.component];

    return (
        <section className="text-white text-left">
            <button
                className="w-full text-left py-4 px-4 font-semibold text-lg flex justify-between items-center hover:bg-gray-800 transition whitespace-pre border border-gray-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="hover:text-magenta">{section.title}</span>
                <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            
            {isOpen && (
                <div className="px-3 pb-6 text-gray-300">
                {SectionComponent && <SectionComponent {...section} />}
                </div>
            )}
        </section>

    );
}

const Accordion = () => {
    return (
        <div className="accordion bg-black bg-opacity-50">
            {sections.map((section) => {
                return (
                    <Row section={section} />
                );
            })}
        </div>
    );
}

export default Accordion;