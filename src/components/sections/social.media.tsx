import { FaFacebook, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";

interface IProps {
  github: string;
  email: string;
  phone: string;
  facebook: string;
}

const SocialMedia = (props: IProps) => {
  const { github, email, phone, facebook } = props;

  return (
    <div className="d-flex my-4 items-center gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight social-icon"
        title="GitHub"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={`mailto:${email}`}
        className="highlight social-icon"
        title="Email"
      >
        <FaEnvelope size={30} />
      </a>
      <a
        href={`tel:${phone}`}
        className="highlight social-icon"
        title="Gọi điện"
      >
        <FaPhone size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight social-icon"
        title="Facebook"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
