import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mohamed-haaris-6604a4317"  // 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Haarissams"  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-gray-900 hover:text-gray-700 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/peace_dude__._2k/"  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
