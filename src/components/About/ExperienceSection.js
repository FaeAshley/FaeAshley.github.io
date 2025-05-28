import { workExperience, education, certifications } from '../../data/experience';

const Certifications = () => {
  return (
    <div id="certifications" className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-magenta">Certifications</h2>
      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id}>
            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>
            <p className="text-gray-300">{cert.issuer} — {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div id="education" className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-magenta">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id}>
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-300">{edu.school}</p>
            <p className="text-sm text-gray-500">Class of {edu.graduation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div className="space-y-10">
        <h2 className="text-3xl font-bold mb-6 text-magenta">Work Experience</h2>
        {workExperience.map((job) => (
          <div key={job.id} className="border-b pb-6">
            <h3 className="text-xl font-semibold">{job.role} — <span className="text-magenta">{job.company}</span></h3>
            <p className="text-sm text-gray-500">{job.location} | {job.start} – {job.end}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              {job.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
const ExperienceSection = () => {
    return (
    <section id="experience" className="py-10">
        <WorkExperience />
        <Education />
        <Certifications />
    </section>
    );
}

export default ExperienceSection;