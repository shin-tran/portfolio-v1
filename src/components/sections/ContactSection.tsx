import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Col, Row } from "react-bootstrap";
import { Suspense, lazy } from "react";
import { CONTACT_LOTTIE } from "@assets/lottie/string/contact";
import ContactForm from "./ContactForm";
import { APP_DATA } from "@helpers/data";
import SocialMedia from "@components/sections/social.media";
import { useTranslation } from "react-i18next";

const LazyLottie = lazy(() => import("@/components/share/animation-lottie"));

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
            {/* <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    /> */}

            {/* //<h4 className="text-center">Contact me</h4> */}
          </Col>
          <p>
            <a href="mailto:ngocshintrann@gmail.com" className="contact-link">
              <MdAlternateEmail className="icon" /> ngocshintrann@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:0696969696" className="contact-link">
              <IoMdCall className="icon" /> 0696969696
            </a>
          </p>
          <p>
            <CiLocationOn className="icon" /> Hiroshima
          </p>
          <Row>
            <Col md={6} xs={12} className="mt-md-5 mt-3">
              {/* // <h3 className="mb-md-5 mb-2">FIND ME ON </h3> */}
              <SocialMedia
                github={APP_DATA.GITHUB_URL}
                email={APP_DATA.EMAIL}
                phone={APP_DATA.PHONE}
                line={APP_DATA.LINE_URL}
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
