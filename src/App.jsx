import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Fade-in animations
    const animateElements = document.querySelectorAll(".hover-glow, .project-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach(element => {
      element.classList.add("animate-fade-in");
      observer.observe(element);
    });

    setTimeout(() => {
      document.querySelectorAll(".animate-fade-in").forEach(el => {
        el.classList.add("appear");
      });
    }, 100);
  }, []);

  return (
    <div className="font-inter bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-24">
          <h1 className="text-3xl font-bold tracking-wide">Siddhant Jakhmola</h1>
          <ul className="flex space-x-8 font-medium">
            <li><a href="#about" className="nav-link text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="nav-link text-gray-400 hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="nav-link text-gray-400 hover:text-white transition-colors">Projects</a></li>
          </ul>
        </nav>

        {/* Hero */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between mb-32">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Siddhant
            </h2>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed font-semibold">
              Full-stack developer building digital experiences with precision and purpose.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I create clean, functional web applications with a focus on user experience and technical excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Sidcre" target="_blank" className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all">
                View Work
              </a>
              <a href="mailto:siddhantjakhmola1234@gmail.com" className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact
              </a>
            </div>
          </div>
          {/* Profile Placeholder */}
          {/* Profile Placeholder */}
<div className="md:w-2/5 relative flex items-center justify-center">
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)] animate-pulse">
    <span className="text-6xl md:text-7xl font-extrabold text-white tracking-wider">
      SJ
    </span>
  </div>
</div>

        </section>

        {/* Skills */}
        <section id="skills" className="mb-32">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-white transition">
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript","TypeScript","HTML5","CSS3","Python","SQL"].map(skill => (
                  <span key={skill} className="skill-tag border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-white transition">
              <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React.js","Next.js","Tailwind CSS","Bootstrap"].map(skill => (
                  <span key={skill} className="skill-tag border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-white transition">
              <h3 className="text-2xl font-semibold mb-6">Backend & Tools</h3>
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js","Supabase"].map(tool => (
                      <span key={tool} className="skill-tag border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:border-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git","GitHub","Netlify","Vercel","VS Code"].map(tool => (
                      <span key={tool} className="skill-tag border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:border-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24">
          <h2 className="text-4xl font-bold mb-16">Projects</h2>
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="hover-glow bg-black rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-white">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Property Dealing Website</h3>
                  <span className="text-sm border border-gray-600 text-gray-300 px-3 py-1 rounded-full mt-2 md:mt-0">In Progress</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js","Tailwind CSS","Supabase","Framer Motion"].map(tech => (
                    <span key={tech} className="border border-gray-700 text-gray-300 px-3 py-1 rounded text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Developing a responsive real estate platform for listing and browsing properties.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Users can add, search, and view property listings with filter options.</li>
                  <li>• Supabase handles data storage and real-time updates.</li>
                  <li>• Animated UI using Framer Motion for a smooth and modern experience.</li>
                </ul>
              </div>
            </div>
            {/* Project 2 */}
            <div className="hover-glow bg-black rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-white">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Food Classification Website</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js","Flask","TensorFlow","MobileNet","Tailwind CSS"].map(tech => (
                    <span key={tech} className="border border-gray-700 text-gray-300 px-3 py-1 rounded text-sm font-medium">{tech}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Developed a web-based food classifier that predicts the food category from an uploaded image.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Integrated a trained MobileNet model (79% test accuracy) served via Flask API.</li>
                  <li>• Users can upload images and get real-time predictions of food items.</li>
                  <li>• Frontend built with React.js and styled using Tailwind CSS.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-16 pb-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4 text-sm font-medium">
            Hehe 👉👈
          </p>
          <div className="flex justify-center space-x-8 text-sm font-semibold">
            <a href="https://github.com/Sidcre" target="_blank" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/siddhant-jakhmola2004/" target="_blank" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:siddhantjakhmola1234@gmail.com" className="text-gray-500 hover:text-white transition-colors">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
