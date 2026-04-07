import techStack from "../data/techStack";


function AboutPage() {
  return (
    <section className="min-h-screen max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">About Page</h1>
      <div>
        <p className="text-gray-400 mb-4 leading-relaxed">
          I'm Bibek Kunwar, a Sydney-based junior software developer with a
          Bachelor's in Computer Science and a Master's in Applied Information
          Technology. I have hands-on experience building and shipping web
          applications in professional Agile environments, and I'm currently
          expanding my skills in React, Vite, and modern frontend tooling.
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            I enjoy solving problems, picking up new technologies quickly, and
            contributing to teams where I can learn and grow. I'm open to
            junior, graduate, or support roles across frontend, full-stack, or
            broader software development.
          
        </p>
      </div>

        <h2 className="text-xl font-bold mt-8 mb-4">TechStack</h2>

        <div className="flex flex-wrap gap-3">
            {
                techStack.map((stacks) => (
                    <span key={stacks} className="bg-gray-700 px-4 py-2 rounded-full text-sm">{stacks}</span>
                ))
            }
        </div>


    </section>
  );
}

export default AboutPage;
