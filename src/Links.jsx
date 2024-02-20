import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

const Links = () => {
  const documentId = "1d9xcsyXXXPDKOpax3V4gKfdMhLCfZDQY";

  const filePath = `https://docs.google.com/document/d/${documentId}/export?format=pdf`;
  return (
    <div className="flex gap-4 justify-end items-center">
      {/* Email */}
      <a
        href="mailto:sarahchoi.webdeveloper@outlook.com"
        className="flex items-center gap-2 text-5xl"
      >
        <AiOutlineMail className="text-5xl" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Choiz0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-5xl"
      >
        <AiOutlineGithub className="text-5xl" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jiyoung-choi-1356272b2/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-5xl"
      >
        <AiOutlineLinkedin className="text-5xl" />
      </a>

      {/* Download Resume Button */}
      <a href={filePath} download="Jiyoung_Choi_Resume.pdf">
        <AiOutlineDownload className="text-5xl" />
      </a>
    </div>
  );
};

export default Links;
