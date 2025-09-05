
// app/page.js
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500 font-sans`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              {/* Logo - Replace with actual logo URL */}
              {/* <Image src="/logo.png" alt="CtrlAltBuild Technologies Logo" width={48} height={48} className="mr-3" /> */}
              <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                CtrlAltBuild
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 text-center bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
            CtrlAltBuild Technologies
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            We are a leading SaaS maker and tech consultancy, transforming ideas into scalable software solutions. Our expert team delivers innovative, high-impact results to drive your business forward in the digital age.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">SaaS Development</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We craft scalable, user-centric SaaS applications that empower businesses with seamless performance and cutting-edge technology.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 border-purple-500 dark:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Tech Consultancy</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our strategic consultancy services guide you through digital transformation, technology adoption, and IT optimization with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                "CtrlAltBuild helped us to scale our fest website."
              </p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">- Drashti Joshi, Secretary of Ananta</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 border-purple-500 dark:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                "Their consultancy services revolutionized our tech stack, making us more agile and competitive."
              </p>
              <p className="font-semibold text-purple-600 dark:text-purple-400">- Jane Smith, CTO of DigitalSolutions</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                "An exceptional team delivering high-quality solutions on time, every time."
              </p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">- Alex Johnson, Founder of StartupHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Ready to elevate your business with innovative SaaS solutions or expert consultancy?
          </p>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-200">
            Reach out to us at{' '}
            <a
              href="mailto:team@ctrlaltbuild.com"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-all duration-300"
            >
              team@ctrlaltbuild.com
            </a>
          </p>
          <a
            href="mailto:info@ctrlaltbuild.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Email Us Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">&copy; 2025 CtrlAltBuild Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
