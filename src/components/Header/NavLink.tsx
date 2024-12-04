import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="relative text-white/80 hover:text-white transition-colors group py-2"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-colors -z-0" />
    </a>
  );
};

export default NavLink;