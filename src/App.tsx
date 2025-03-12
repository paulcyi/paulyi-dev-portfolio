import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Terminal, Shield, Server, Code2, ExternalLink, Download, Mail } from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const text1 = "From Infantry to";
  const text2 = "Infrastructure.";
  const [downloadError, setDownloadError] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    let currentText1 = '';
    let currentText2 = '';
    let currentIndex = 0;
    const totalLength = text1.length + text2.length;

    const typeText = () => {
      if (currentIndex < totalLength) {
        if (currentIndex < text1.length) {
          currentText1 += text1[currentIndex];
          setDisplayText1(currentText1);
        } else {
          currentText2 += text2[currentIndex - text1.length];
          setDisplayText2(currentText2);
        }
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();
  }, []);

  const handleDownloadResume = () => {
    window.open('https://ceaxvzgjuscuhxzyhgeq.supabase.co/storage/v1/object/public/Docs/paul-yi.pdf', '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Paul Yi
          </motion.h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="text-white" /> : <Moon className="text-gray-900" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div>
              <h2 className="mb-6">
                <span className="block text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {displayText1}
                </span>
                <span className="block text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {displayText2}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Former U.S. Army Infantryman turned DevOps Engineer, bringing military precision and leadership to modern tech operations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/paulcyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/paulcyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Technological Landscape"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">CI/CD, Docker, Kubernetes, Jenkins</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Security</h3>
              <p className="text-gray-600 dark:text-gray-300">Infrastructure Security, Compliance</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <Server className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300">AWS, Terraform, Ansible</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <Code2 className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">Python, Bash, Infrastructure as Code</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Showcasing my journey in DevOps and automation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AWS DevOps Demo</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive demonstration of AWS DevOps practices including CI/CD pipelines, infrastructure as code, and automated deployments.
                </p>
                <a
                  href="https://github.com/paulcyi/aws-devops-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Serverless URL Shortener</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A serverless application built with AWS Lambda and API Gateway that provides URL shortening functionality with analytics.
                </p>
                <a
                  href="https://github.com/paulcyi/serverless-url-shortener"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Currently open to new DevOps Engineering opportunities
            </p>
          </motion.div>
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <a
                href="mailto:yipaulc@gmail.com"
                className="w-full sm:w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Mail size={20} />
                Email Me
              </a>
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-[200px] flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>
            {downloadError && (
              <p className="text-red-500 dark:text-red-400">{downloadError}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Paul Yi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
