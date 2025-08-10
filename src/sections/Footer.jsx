import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon flex items-center justify-center rounded-full"
            style={{ backgroundColor: link.color, width: '40px', height: '40px' }}>
            <img
              src={link.icon}
              alt={link.name}
              className="w-1/2 h-1/2"
              style={{ filter: link.color === '#e2f' ? 'invert(1)' : 'none' }}
            />
          </a>
        ))}
      </div>

      <p className="text-white-500">© 2025 Safwat Bilal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
