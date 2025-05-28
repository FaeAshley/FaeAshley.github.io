const ResumeSection = () => {
    return (
        <section className="py-10 text-center">
            <div className="pb-10">
                <a
                    href="/resume.pdf"
                    download="Fae_Ashley_Resume.pdf"
                    className="bg-magenta text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                >
                    Download PDF Resume
                </a>
            </div>
            <div>
                <a
                    href="/resume.pdf"
                    download="Fae_Ashley_Resume.docx"
                    className="bg-magenta text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                >
                    Download DOCX Resume
                </a>
            </div>
        </section>
    );
}

export default ResumeSection;