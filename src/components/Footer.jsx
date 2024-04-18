import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  let names = [
    {
      name: 'Contacto',
      route: '/contact',
    },
    {
      name: 'Política de privacidad',
      route: '/legal/private-policy',
    },
  ];

  const showNames = names.map((item, index) => (
    <a href={`${item.route}`} className="margin-x-2" key={index}>
      {item.name}
    </a>
  ));

  return (
    <footer>
      <div className="footerContainer">
        <div className="footerDiv">
          <a
            href="https://www.linkedin.com/in/dianatabraue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footerIcons" />
          </a>
          <a
            href="https://github.com/tabraue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="footerIcons" />
          </a>
          <a href="mailto:dianatabraue@gmail.com">
            <HiOutlineMail className="footerIcons" />
          </a>
        </div>

        <div className="footerLinks">{showNames}</div>
      </div>
    </footer>
  );
};

export default Footer;
