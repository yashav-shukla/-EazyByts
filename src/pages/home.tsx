import { ArrowRight, Github, Linkedin, Mail, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="max-w-4xl mx-auto text-center">
      <div className="container mx-auto px-4 py-16">
      
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-indigo-500">Yashav Shukla</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
          </p>
         
         <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/yashav-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/yashav-shukla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <MailIcon className="w-8 h-8" />
            </a>
          </div>
          </div>
          <p></p>
        <div className="flex justify-center gap-4">
          <Link to="/projects">
            <Button size="lg" className="gap-2">
              View Projects <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/contact">
          <a
              href="mailto:yashavshukla1@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
            <Button size="lg" variant="outline" className="gap-2">
              Contact Me <Mail className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        
      </section>
    </div>
    
  );
}