import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Terminal, Shield, Server, Code2, ExternalLink, Download, Mail } from 'lucide-react';
import { supabase } from './lib/supabase';
import { FaAws, FaDocker, FaPython, FaGithub } from 'react-icons/fa';
import { SiTerraform, SiGithubactions, SiAmazonapigateway, SiAmazondynamodb, SiAmazons3, SiSonarqube, SiTrivy } from 'react-icons/si';

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

  const iconHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 0.2
      }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300`}>
      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm z-50">
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
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#1E1E1E] transition-colors"
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
                <motion.a
                  href="https://github.com/paulcyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-[#121212] rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={buttonHover}
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/paulcyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-[#1E1E1E] transition-colors"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={buttonHover}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
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
      <section className="py-20 bg-gray-50 dark:bg-[#181818]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {[
              { icon: Terminal, title: "DevOps", desc: "CI/CD, Docker, Kubernetes, Jenkins", color: "text-blue-600" },
              { icon: Shield, title: "Security", desc: "Infrastructure Security, Compliance", color: "text-green-600" },
              { icon: Server, title: "Infrastructure", desc: "AWS, Terraform, Ansible", color: "text-purple-600" },
              { icon: Code2, title: "Automation", desc: "Python, Bash, Infrastructure as Code", color: "text-red-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className="p-6 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg dark:shadow-black/20 dark:border dark:border-[#2C2C2C] hover:dark:bg-[#252525] transition-colors duration-300"
              >
                <motion.div variants={iconHover}>
                  <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
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
            {[
              {
                title: "AWS DevOps Demo",
                description: "Scalable web app on AWS ECS Fargate with a live DynamoDB hit counter. Demonstrates CI/CD with GitHub Actions, Docker, and Terraform.",
                icons: [
                  { Icon: FaAws, color: "#FF9900", title: "AWS" },
                  { Icon: FaDocker, color: "#2496ED", title: "Docker" },
                  { Icon: SiGithubactions, color: "#2088FF", title: "GitHub Actions" },
                  { Icon: FaPython, color: "#3776AB", title: "Python" },
                  { Icon: SiTerraform, color: "#7B42BC", title: "Terraform" }
                ],
                link: "https://github.com/paulcyi/aws-devops-demo"
              },
              {
                title: "Serverless URL Shortener",
                description: "A serverless application built with AWS Lambda and API Gateway that provides URL shortening functionality with analytics.",
                icons: [
                  { Icon: FaAws, color: "#FF9900", title: "AWS Lambda" },
                  { Icon: SiAmazonapigateway, color: "#FF4F8B", title: "API Gateway" },
                  { Icon: SiAmazondynamodb, color: "#4053D6", title: "DynamoDB" },
                  { Icon: SiAmazons3, color: "#569A31", title: "S3" },
                  { Icon: SiTerraform, color: "#7B42BC", title: "Terraform" },
                  { Icon: SiGithubactions, color: "#2088FF", title: "GitHub Actions" },
                  { Icon: SiSonarqube, color: "#4E9BCD", title: "SonarQube" },
                  { Icon: SiTrivy, color: "#1904DA", title: "Trivy" }
                ],
                link: "https://github.com/paulcyi/serverless-url-shortener"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg dark:shadow-black/20 dark:border dark:border-[#2C2C2C] overflow-hidden h-full hover:dark:bg-[#252525] transition-colors duration-300"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4 min-h-[32px] items-center">
                    {project.icons.map((IconItem, i) => (
                      <motion.div
                        key={i}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={iconHover}
                      >
                        <IconItem.Icon className="w-8 h-8" style={{ color: IconItem.color }} title={IconItem.title} />
                      </motion.div>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={buttonHover}
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#181818]">
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
              <motion.a
                href="mailto:yipaulc@gmail.com"
                className="w-full sm:w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-[#121212] rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
              >
                <Mail size={20} />
                Email Me
              </motion.a>
              <motion.button
                onClick={handleDownloadResume}
                className="w-full sm:w-[200px] flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-[#1E1E1E] transition-colors"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={buttonHover}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>
            {downloadError && (
              <p className="text-red-500 dark:text-red-400">{downloadError}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-[#181818] py-12">
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
