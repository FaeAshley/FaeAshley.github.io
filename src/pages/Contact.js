import ParticlesBackground from "../components/Shared/ParticlesBackground";
import ContactImg from '../assets/contact-image.png';

const ContactForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            company: form.company.value,
            message: form.message.value,
        };

        try {
            const res = await fetch(process.env.REACT_APP_CONTACT_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Message sent! Fae thanks you with her whole heart.");
                form.reset();
            } else {
                alert("Something went wrong. Try again?");
            }
        } catch (err) {
            console.error(err);
            alert("The server isn't responding... maybe FaeGPT is napping?");
        }
    };

    return (
        <div className="flex-1  p-6 rounded-lg shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold text-faebot-accent mb-4"><span className="hover:text-faebot-text">Contact</span> Me</h1>

                <div>
                <label htmlFor="name" className="block text-sm font-medium text-faebot-subtext">
                    Name <span className="text-magenta">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-faebot-background text-faebot-text border border-faebot-surface focus:ring-2 focus:ring-magenta focus:outline-none p-2"
                    required
                />
                </div>

                <div>
                <label htmlFor="company" className="block text-sm font-medium text-faebot-subtext">
                    Company
                </label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    className="mt-1 block w-full rounded-md bg-faebot-background text-faebot-text border border-faebot-surface focus:ring-2 focus:ring-magenta focus:outline-none p-2"
                />
                </div>

                <div>
                <label htmlFor="phone" className="block text-sm font-medium text-faebot-subtext">
                    Phone Number <span className="text-magenta">*</span>
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md bg-faebot-background text-faebot-text border border-faebot-surface focus:ring-2 focus:ring-magenta focus:outline-none p-2"
                    required
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-faebot-subtext">
                    Email <span className="text-magenta">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-faebot-background text-faebot-text border border-faebot-surface focus:ring-2 focus:ring-magenta focus:outline-none p-2"
                    required
                />
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-faebot-subtext">
                    Message <span className="text-magenta">*</span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md bg-faebot-background text-faebot-text border border-faebot-surface focus:ring-2 focus:ring-magenta focus:outline-none p-2"
                    required
                ></textarea>
                </div>

                <button
                type="submit"
                className="mt-4 w-full bg-magenta hover:bg-magenta-light text-white font-semibold py-2 px-4 rounded transition duration-200"
                >
                Send Message
                </button>
            </form>
        </div>

    );
}

const ContactImage = () => {
    return(
        <div className="flex-1 p-6 rounded-lg shadow-md flex items-center justify-center">
            <img
                src={ContactImg}
                alt="Contact visual"
                className="rounded-md object-cover w-full h-full max-h-[600px]"
            />
        </div>
    );
}

function Contact() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 ">
        <div className="flex flex-col md:flex-row items-stretch w-full max-w-5xl rounded-lg px-3 pt-2 bg-black bg-opacity-75">
            <div className="flex flex-col md:flex-row items-stretch w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-6">
                <ContactForm />
                <ContactImage />
            </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;