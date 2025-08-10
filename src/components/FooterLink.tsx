import type React from "react";
import { Link } from "react-router-dom";

interface LinkType {
  id: number;
  name: string;
}

interface FooterLinkProps {
  link: LinkType;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link }) => {
  return (
    <li key={link.id} className='list-disc transition hover:text-yellow1'>
      <Link to=''>{link.name}</Link>
    </li>
  );
};

export default FooterLink;
