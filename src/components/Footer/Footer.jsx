import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer links data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "SEO Optimization", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Github className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">BrandName</span>
            </div>
            <p className="text-gray-400">
              Creating innovative solutions for your digital needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={`${social.icon.type.displayName} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-2 text-indigo-400" />
                <span>123 Street, City, Country</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-indigo-400"
                >
                  info@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+1234567890" className="hover:text-indigo-400">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 flex justify-around pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} BrandName. All rights reserved.</p>
          <p>Developed By Rich System & Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
