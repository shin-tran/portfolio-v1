import { Col, Container, Row } from "react-bootstrap";
//import AnimationLottie from "@/components/share/animation-lottie";
import { useTranslation } from "react-i18next";

import avatarImg1 from "@assets/about.jpg";
//import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
//import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
//import GlowCard from "components/share/glow-card";
//import { FaGraduationCap } from "react-icons/fa6";
import Divider from "@components/sections/divider";
//import { APP_DATA } from "helpers/data";
//import SocialMedia from "components/sections/social.media";
import Experience from "@components/sections/experience";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Ảnh đại diện ở trên */}
      <Row className="d-flex justify-content-center text-center">
        <Col xs={12} md={6}>
          <img src={avatarImg1} className="about-image" alt="個人写真" />
        </Col>
      </Row>

      {/* Nội dung giới thiệu nằm dưới ảnh */}
      <Row className="about-content">
        <Col xs={12}>
          <h3 className="mb-4 text-center">
            {" "}
            <span className="brand-red"></span>
          </h3>

          <p>
            {t("about.p1")} <strong>{t("about.p2")}</strong>
            {t("about.li55")} {t("about.p3")} <strong>{t("about.p4")}</strong>
            {t("about.p44")}
          </p>
          <p>{t("about.p5")}</p>

          <h5>💡 {t("about.h1")}</h5>
          <ul>
            <li>
              {t("about.li1")} <strong>{t("about.li2")}</strong>
              {t("about.li222")}
            </li>
            <li>
              {t("about.li3")} <strong>{t("about.li4")}</strong>{" "}
              {t("about.li5")}
            </li>
          </ul>

          <h5>🚀 {t("about.h2")}</h5>
          <ul>
            <li>
              {t("about.li6")}
              <strong>{t("about.li7")}</strong> {t("about.li8")}{" "}
              <strong>{t("about.li9")}</strong>
              {t("about.li99")}
            </li>
            <li>
              {t("about.li10")} <strong>5 {t("about.li11")}</strong>{" "}
              {t("about.li12")}
            </li>
            <li>
              {t("about.li13")}
              <strong> UI/UX</strong>
              {t("about.li55")} {t("about.li15")}
            </li>
          </ul>

          <h5>🎯 {t("about.h3")}</h5>
          <ul>
            <li>
              🔹 <strong>{t("about.li16")}</strong>: {t("about.li17")}
              <strong>{t("about.li18")}</strong>
              {t("about.li55")} {t("about.li19")}
              <strong> {t("about.li20")} </strong>
              {t("about.li21")}
            </li>
            <li>
              🔹 <strong>{t("about.li22")}</strong>: {t("about.li23")}{" "}
              <strong>{t("about.li24")}</strong>
              {t("about.li55")} {t("about.li25")}
            </li>
            <li>
              🔹 <strong>{t("about.li26")}</strong>: {t("about.li27")}{" "}
              <strong>{t("about.li28")}</strong>
              {t("about.li55")} {t("about.li29")}
              <strong>{t("about.li30")} </strong>
              {t("about.li31")}
              <strong> {t("about.li32")}</strong> {t("about.li322")}
              {t("about.li55")}
              {t("about.li33")}
            </li>
          </ul>

          <p className="brand-red journey-quote text-center">
            <strong>"{t("about.quote")}!"</strong>
          </p>
        </Col>
      </Row>

      <Divider />
      <section>
        <Container>
          <Experience />
        </Container>
      </section>

      {/* <Row>

                <Col md={6} xs={12} className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div>
                            <h4 className="text-center brand-red">Education</h4>
                        </div>
                        <div>
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>20xx-20xx</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Practical Engineer</p>
                                                <p className="company">Hanoi College of Economics and Technology</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row> */}

      <Divider />
      {/* <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        email={APP_DATA.EMAIL}
                        phone={APP_DATA.PHONE}
                        line={APP_DATA.LINE_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                    />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row> */}
      <div className="mb-5"></div>
    </>
  );
};

export default About;
