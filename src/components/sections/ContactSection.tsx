import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Col, Row } from "react-bootstrap";
import { Suspense, lazy } from "react";
import { CONTACT_LOTTIE } from "@assets/lottie/string/contact.d";
import ContactForm from "./ContactForm";
import SocialMedia from "./social.media";
import { useTranslation } from "react-i18next";
import { APP_DATA } from "@helpers/data";

const LazyLottie = lazy(() => import("@components/share/animation-lottie"));

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="contact-section">
      <div className="contact-header">
        <span>{t("contact.title")}</span>
        <div className="line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
        <div className="contact-info">
          <Col
            md={6}
            xs={12}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div
              className="lottie-container"
              onClick={() =>
                (window.location.href = "mailto:ngocshintrann@gmail.com")
              }
            >
              <Suspense fallback={null}>
                <LazyLottie animationPath={JSON.parse(CONTACT_LOTTIE)} />
              </Suspense>
            </div>
          </Col>
          <p>
            <a href="mailto:ngocshintrann@gmail.com" className="contact-link">
              <MdAlternateEmail className="icon" />
              ngocshintrann@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:0696969696" className="contact-link">
              <IoMdCall className="icon" />
              0696969696
            </a>
          </p>
          <p>
            <CiLocationOn className="icon mr-1" />
            District 9, Ho Chi Minh city
          </p>
          <Row>
            <Col md={6} xs={12} className="mt-md-5 mt-3">
              <SocialMedia
                github={APP_DATA.GITHUB_URL}
                email={APP_DATA.EMAIL}
                phone={APP_DATA.PHONE}
                facebook={APP_DATA.FACEBOOK_URL}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
