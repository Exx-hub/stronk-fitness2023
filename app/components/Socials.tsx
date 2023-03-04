import React from "react";
import Link from "next/link";

import { FaGithub, FaFacebookF, FaLinkedinIn, FaLaptopCode, FaGitlab } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-5 mb-1">
      <Link
        href="https://www.facebook.com/alvinfloresacosta"
        target="_blank"
        className="footer-icons"
      >
        <FaFacebookF />
      </Link>

      <Link
        href="https://www.linkedin.com/in/alvin-acosta/"
        target="_blank"
        className="footer-icons"
      >
        <FaLinkedinIn />
      </Link>
      <Link href="https://github.com/Exx-hub" target="_blank" className="footer-icons">
        <FaGithub />
      </Link>
      <Link href="https://gitlab.com/Exx-hub" target="_blank" className="footer-icons">
        <FaGitlab />
      </Link>
      <Link href="https://www.acosta.codes" target="_blank" className="footer-icons">
        <FaLaptopCode />
      </Link>
    </div>
  );
}

export default Socials;
