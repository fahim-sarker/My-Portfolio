import "./contact.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPaperPlane, FaGithub, FaLinkedin, FaComment } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const EMAIL = "sarkerfahim599@gmail.com";

const contactInfo = [
    {
        Icon: FaComment,
        label: "Mail Me",
        value: EMAIL,
        href: `mailto:${EMAIL}`,
    },
    {
        Icon: FaPhoneFlip,
        label: "Call Me",
        value: "+880 1647389997",
        href: "tel:+8801647389997",
    },
];

const socials = [
    {
        Icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/fahim-sarker",
    },
    {
        Icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fahim-sarker-089817312/",
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Opens the visitor's email app with the message pre-filled.
    // No backend needed. See the note below if you want direct sending.
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(
            `${form.message}\n\nFrom: ${form.name} (${form.email})`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact">
            <Container>
                <Row className="text-center">
                    <div className="contact_head">
                        <h2>Contact</h2>
                        <h3>Get In</h3>
                        <h4>Touch</h4>
                    </div>
                </Row>

                <Row>
                    <Col lg={4}>
                        <div className="contact-txt">
                            <h2>Don't be shy!</h2>
                            <p>
                                Feel free to get in touch with me. I am always open to
                                discussing new projects, creative ideas or opportunities to be
                                part of your visions.
                            </p>

                            {contactInfo.map(({ Icon, label, value, href }) => (
                                <div className="contact-info" key={label}>
                                    <Icon className="contact-icon" />
                                    <h5>{label}</h5>
                                    <a href={href}>{value}</a>
                                </div>
                            ))}

                            <div className="social-links">
                                {socials.map(({ Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="contact-item">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button type="submit">
                                    Send Message <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;