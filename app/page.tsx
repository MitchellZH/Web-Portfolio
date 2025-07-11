"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCheck,
  faCode,
  faBolt,
  faPaintBrush,
  faDatabase,
  faTools,
  faFileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (name && email && message) {
      try {
        const templateParams = {
          from_name: name,
          from_email: email,
          to_email: "mitchellhamm52@gmail.com",
          subject: subject || "Contact Form Submission",
          message: message,
          reply_to: email,
        };

        await emailjs.send(
          "service_q3dspt3",
          "template_q3dspt3",
          templateParams,
          "user_q3dspt3"
        );

        toast.success(
          "Thank you for your message! I will get back to you soon.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        form.reset();
      } catch (error) {
        console.error("Failed to send email:", error);
        toast.error(
          "Sorry, there was an error sending your message. Please try again or contact me directly at mitchellhamm52@gmail.com",
          {
            position: "bottom-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    } else {
      toast.warning("Please fill in all required fields.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <nav
        className={`navbar fixed w-full z-50 py-4 px-6 md:px-12 ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span style={{ color: "var(--orange)" }}>Mitchell</span>
            <span style={{ color: "var(--dark)" }}>Hamm</span>
          </a>

          <div className="hidden md:flex font-bold space-x-8">
            <a
              href="#home"
              className="hover:text-[var(--orange)] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-[var(--orange)] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-[var(--orange)] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-[var(--orange)] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--orange)] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-2xl relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between transform transition-all duration-300">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full py-4 px-6 shadow-lg transition-all duration-300 ${
              isScrolled ? "bg-[var(--light-tan)]/80" : "bg-white/50"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="hover:text-[var(--orange)] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-[var(--orange)] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-[var(--orange)] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#about"
                className="hover:text-[var(--orange)] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--orange)] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 relative bg-[url('/abstract-background.png')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black before:opacity-20 before:z-0"
      >
        <div className="container mx-auto flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg">
              Mitchell Hamm
            </h1>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              <span style={{ color: "var(--orange)" }}>Software Developer</span>{" "}
              & UX Designer
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              I craft beautiful, functional digital experiences that help
              businesses connect with their audience and achieve their goals.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#projects"
                className="btn btn-animated btn-ripple text-white px-8 py-3 rounded-full font-bold shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn border-2 border-white text-white px-8 py-3 rounded-full hover:bg-[var(--white)] hover:text-black transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-100">Find me on:</span>
              <a
                href="https://github.com/MitchellZH"
                className="text-gray-100 hover:text-[var(--orange)] transition-colors duration-300 text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/mitchell-hamm-dev/"
                className="text-gray-100 hover:text-[var(--orange)] transition-colors duration-300 text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My <span style={{ color: "var(--orange)" }}>Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a range of services to help businesses create impactful
              digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faCode,
                title: "Web Development",
                description:
                  "I build responsive, fast-loading websites that work flawlessly across all devices and browsers.",
                features: [
                  "Custom Website Development",
                  "E-commerce Solutions",
                  "Web Application Development",
                ],
                bgColor: "bg-[var(--light-blue)]",
              },
              {
                icon: faPaintBrush,
                title: "UI/UX Design",
                description:
                  "I create intuitive, engaging user experiences that keep visitors coming back.",
                features: [
                  "User Research & Personas",
                  "Wireframing & Prototyping",
                  "Interactive Design",
                ],
                bgColor: "bg-gray-600",
              },
              {
                icon: faBolt,
                title: "Performance Optimization",
                description:
                  "I optimize websites for speed, SEO, and conversion to maximize results.",
                features: [
                  "Speed Optimization",
                  "SEO Implementation",
                  "Conversion Rate Optimization",
                ],
                bgColor: "bg-[var(--light-tan)]",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="service-card bg-[var(--white)] p-8 rounded-xl shadow-lg"
              >
                <div
                  className={`${service.bgColor} bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="h-8 w-8 text-[var(--orange)]"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-5 w-5 mr-2 text-[var(--orange)]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 md:px-12 bg-[var(--white)]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span style={{ color: "var(--orange)" }}>Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/recipe-rover-thumbnail.png",
                title: "Recipe Rover",
                description:
                  "This app allows users to search and save 1000s of recipes from the Spoonacular API, complete with detailed cooking instructions.",
                tags: ["React", "Firebase", "TypeScript", "MUI"],
                githubUrl: "https://github.com/MitchellZH/RecipeRover",
                liveUrl: "https://reciperover.netlify.app/",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="project-card rounded-xl overflow-hidden bg-[var(--white)] shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="h-64 relative bg-[var(--white)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3EProject Screenshot%3C/text%3E%3C/svg%3E";
                      }}
                    />

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--white)] bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="h-5 w-5 text-[var(--dark)]"
                        />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[var(--white)] bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            window.open(project.liveUrl!, "_blank");
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="h-5 w-5 text-[var(--orange)]"
                          />
                        </a>
                      )}
                    </div>

                    <div className="card-overlay absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
                      <div className="text-white">
                        <h4 className="font-bold">View Project</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[var(--light-tan)] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/MitchellZH"
              target="_blank"
              className="btn btn-secondary-animated btn-ripple btn-float inline-block text-[var(--dark)] px-8 py-3 rounded-full font-bold shadow-lg"
            >
              View All Projects
            </a>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technical <span style={{ color: "var(--orange)" }}>Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I&apos;ve developed expertise in various technologies to deliver
              comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: faFileAlt,
                title: "HTML5 & CSS3",
                description: "Semantic markup and modern styling techniques",
                progress: 95,
                bgColor: "bg-[var(--light-blue)]",
              },
              {
                icon: faCode,
                title: "JavaScript",
                description: "ES6+, DOM manipulation, and async programming",
                progress: 90,
                bgColor: "bg-[var(--orange)]",
              },
              {
                icon: faCode,
                title: "React",
                description: "Component-based UI development with hooks",
                progress: 85,
                bgColor: "bg-[var(--light-tan)]",
              },
              {
                icon: faCode,
                title: "Flask",
                description: "Server-side Python and API development",
                progress: 80,
                bgColor: "bg-[var(--dark)]",
              },
              {
                icon: faDatabase,
                title: "MongoDB",
                description: "NoSQL database design and management",
                progress: 75,
                bgColor: "bg-[var(--light-blue)]",
              },
              {
                icon: faPaintBrush,
                title: "UI/UX Design",
                description: "User-centered design and prototyping",
                progress: 90,
                bgColor: "bg-[var(--orange)]",
              },
              {
                icon: faDatabase,
                title: "MySQL",
                description: "Relational database management and design",
                progress: 70,
                bgColor: "bg-[var(--light-tan)]",
              },
              {
                icon: faTools,
                title: "Git & CI/CD",
                description: "Version control and automated deployment",
                progress: 85,
                bgColor: "bg-[var(--dark)]",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="skill-item bg-[var(--white)] p-6 rounded-xl shadow-md text-center"
              >
                <div
                  className={`${skill.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={`h-8 w-8 ${
                      skill.bgColor === "bg-[var(--orange)]" ||
                      skill.bgColor === "bg-[var(--dark)]"
                        ? "text-white"
                        : "text-[var(--dark)]"
                    }`}
                  />
                </div>
                <h3 className="font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
                <div className="mt-3 w-full bg-[var(--white)] rounded-full h-1.5">
                  <div
                    className="bg-[var(--orange)] h-1.5 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 md:px-12 bg-[var(--white)]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--orange)] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--light-blue)] rounded-full opacity-30 blur-2xl"></div>
              <div className="bg-[var(--light-tan)] rounded-2xl relative z-10">
                <Image
                  src="/me.jpg"
                  alt="About Me"
                  layout="responsive"
                  className="rounded-2xl"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span style={{ color: "var(--orange)" }}>Me</span>
              </h2>
              <p className="text-gray-600 mb-6">
                I&apos;m Mitchell Hamm, a passionate web developer and UX
                designer based in Spokane, Washington. With over 6 years of
                experience in the industry, I specialize in creating beautiful,
                functional websites and applications that deliver exceptional
                user experiences.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in the coding world began with a fascination for the
                intersection of design and technology. After completing my
                degree in Software Development and earning certifications in
                Python, TypeScript, and more at Coding Temple, I began doing
                contract work for Scale AI, where I trained AI models on best
                coding practices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className="text-gray-600">
                    Spokane Community College
                    <br />
                    AAS in Software Development
                  </p>
                  <br />
                  <p className="text-gray-600">
                    Coding Temple
                    <br />
                    Certifications: Python, TypeScript, React, Node.js
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Experience</h4>
                  <p className="text-gray-600">
                    6+ Years
                    <br />
                    Web Development & UX Design
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn-animated btn-ripple text-white px-8 py-3 rounded-full font-bold shadow-lg"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Professional{" "}
                <span style={{ color: "var(--orange)" }}>Journey</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A glimpse into my career path and professional development.
              </p>
            </motion.div>

            <div className="space-y-8 pl-12 relative">
              {[
                {
                  period: "2023 - Present",
                  title: "AI Trainer at Scale AI",
                  description:
                    "Training AI models on best coding practices and providing feedback to improve their performance. Collaborating with a team of developers to enhance AI capabilities in software development.",
                },
                {
                  period: "2023 - 2023",
                  title: "Apprentice at Coding Temple",
                  description:
                    "Gained hands-on experience in web development through immersive training and real-world projects. Developed skills in Python, TypeScript, React, and Node.js, focusing on best practices and modern development workflows.",
                },
                {
                  period: "2022 - 2023",
                  title: "Freelance Web Developer & UX Designer",
                  description:
                    "Developed websites and applications for small businesses and startups. Focused on user-centered design and accessibility best practices.",
                },
                {
                  period: "2019 - 2022",
                  title: "Student at Spokane Community College",
                  description:
                    "Learning the fundamentals of software development, focusing on web technologies and user experience design. Participated in various team projects using Agile methodologies and scrum.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="timeline-item pb-8"
                >
                  <div className="timeline-dot top-0"></div>
                  <div className="bg-[var(--white)] p-6 rounded-xl shadow-md ml-6">
                    <span className="text-sm text-[var(--orange)] font-medium">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 md:px-12 bg-[var(--white)]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get In <span style={{ color: "var(--orange)" }}>Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential
              collaborations? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--white)] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-input w-full p-3 bg-[var(--light-tan)] rounded-lg focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-input w-full p-3 bg-[var(--light-tan)] rounded-lg focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact-input w-full p-3 bg-[var(--light-tan)] rounded-lg focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="contact-input w-full p-3 bg-[var(--light-tan)] rounded-lg focus:outline-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-animated btn-ripple w-full text-white py-3 rounded-lg font-bold text-lg shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[var(--white)] p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: faEnvelope,
                      title: "Email",
                      info: "mitchellhamm52@gmail.com",
                      bgColor: "bg-[var(--light-blue)]",
                    },
                    {
                      icon: faMapMarkerAlt,
                      title: "Location",
                      info: "Spokane, Washington",
                      bgColor: "bg-[var(--light-tan)]",
                    },
                    {
                      icon: faClock,
                      title: "Working Hours",
                      info: "Mon - Fri: 9:00 AM - 6:00 PM",
                      bgColor: "bg-[var(--dark)]",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`${contact.bgColor} w-10 h-10 rounded-full flex items-center justify-center mr-4`}
                      >
                        <FontAwesomeIcon
                          icon={contact.icon}
                          className={`h-5 w-5 ${
                            contact.bgColor === "bg-[var(--orange)]" ||
                            contact.bgColor === "bg-[var(--dark)]"
                              ? "text-white"
                              : "text-[var(--dark)]"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{contact.title}</h4>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--dark)] text-white py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#" className="text-2xl font-bold mb-4 inline-block">
                <span style={{ color: "var(--orange)" }}>Mitchell</span>
                <span className="text-white">Hamm</span>
              </a>
              <p className="text-gray-400 mb-4">
                Creating beautiful digital experiences with a focus on
                usability, accessibility, and aesthetic appeal.
              </p>
              <div className="flex space-x-3">
                {[
                  "https://www.linkedin.com/in/mitchell-hamm-dev/",
                  "https://github.com/MitchellZH",
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[var(--orange)] transition-colors duration-300"
                  >
                    {link ===
                    "https://www.linkedin.com/in/mitchell-hamm-dev/" ? (
                      <FontAwesomeIcon icon={faLinkedin} />
                    ) : (
                      <FontAwesomeIcon icon={faGithub} />
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Projects", "Skills", "About", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-[var(--orange)] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Mobile Apps",
                  "E-commerce",
                  "Consulting",
                ].map((service, index) => (
                  <li key={index}>
                    <p className="text-gray-400 hover:text-[var(--orange)] transition-colors duration-300">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Mitchell Hamm. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "var(--white)",
          color: "var(--dark)",
          border: "1px solid var(--light-tan)",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          fontFamily: "Poppins, sans-serif",
        }}
      />
    </div>
  );
}
