import { useState } from "react";
import emailjs from "@emailjs/browser"


function ContactPage() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [mailSent, setMailSent] = useState(false);


async function handleSubmit() {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name, email, message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    setMailSent(true)
    setName("")
    setEmail("")
    setMessage("")
  } catch (error) {
    console.error(error)
  }
}

  return (
    <section className="text-center min-h-screen max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
      <p className="text-gray-400 mb-8">
        I'm always happy to chat about new opportunities, collaborations, or
        just tech in general. Drop me a message and I'll get back to you as soon
        as I can.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <a
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
          href="mailto: bibekkunwar7878@gmail.com"
          target="_blank"
        >
          Mail
        </a>
        <a
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
          href="https://github.com/bibekkunwar"
          target="_blank"
        >
          Github
        </a>
        <a
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
          href="https://www.linkedin.com/in/bibek-kunwar-a7a0b7216/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

        <form className="flex flex-col mt-8 text-left">
  <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white mb-4" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Your Name" />
  <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white mb-4" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" />
  <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white mb-4 h-32" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Your Message" />
  <button type="button" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-40" onClick={handleSubmit}>Send Message</button>
</form>

{mailSent && <p className="text-green-400 mt-4">Thanks for reaching out! I'll get back to you soon.</p>}

    </section>
  );
}

export default ContactPage;
