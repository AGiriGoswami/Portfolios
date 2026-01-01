const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800/70 backdrop-blur-md border-b border-gray-700">
      <div className="flex justify-between items-center px-8 py-4">

        {/* LOGO / HOME → HERO SECTION */}
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500
                     bg-clip-text text-transparent hover:scale-105
                     transition-transform duration-300"
        >
          Ajay Giri Goswami
        </a>

        {/* MENU */}
        <ul className="hidden md:flex space-x-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Education", id: "education" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-indigo-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
