import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterContainer, FooterList, FooterLink, Link, FooterTextContainer, FooterText } from "../../styled-components/FooterElements";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FaLinkedin />
      <FooterList>
        <FooterLink>
          <Link href='/' target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </Link>
        </FooterLink>
        <FooterLink>
          <Link href='/' target="_blank" aria-label="Github">
            <FaGithub />
          </Link>
        </FooterLink>
        <FooterLink>
          <Link href='/' target="_blank" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </FooterLink>
        <FooterLink>
          <Link href='/' target="_blank" aria-label="Twitter">
            <FaTwitter />
          </Link>
        </FooterLink>
      </FooterList>
      <FooterTextContainer>
        <FooterText>© Gabriel Rojas {year}</FooterText>
      </FooterTextContainer>
    </FooterContainer>
  );
};

export { Footer };
