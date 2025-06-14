import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import avatarImg from "@assets/avatar.png";
import "./introduction.scss";
import { useTranslation } from "react-i18next";
import { DEVELOPMENT_LOTTIE } from "@assets/lottie/string/development.d";
import GlowCard from "@components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import { lazy, Suspense } from "react";
const LazyLottie = lazy(() => import("@/components/share/animation-lottie"));

const Introduction = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="introduction-section my-md-7 my-5"
      style={{ position: "relative" }}
    >
      <Row>
        <Col xs={12} md={9}>
          <h2 className="text-md-start text-center">
            {i18n.resolvedLanguage === "en" ? (
              <>
                <span className="text-pink-100">Personal Profile</span>
              </>
            ) : (
              <>
                <span className="text-pink-100">Đôi nét </span>về bản thân
              </>
            )}
          </h2>
          <br />
          <p>
            {t("introSection.heading1")}
            <br />
            <br />
            {t("introSection.heading2")}
            <i>
              <b className="text-pink-100">
                {" "}
                Html, Css, Javascript, Typescript {t("introSection.and4")}{" "}
                React.
              </b>
            </i>
            <br />
            <br />
            {t("introSection.heading5")}
            <i>
              <b className="text-pink-100">&nbsp; {t("introSection.and1")} </b>
            </i>
            {t("introSection.and")}
            <i>
              <b className="text-pink-100"> {t("introSection.and2")}</b>
            </i>
            <br />
            <br />
            {t("introSection.heading3")} &nbsp;
            <i>
              <b className="text-pink-100">{t("introSection.heading4")}</b>
            </i>
          </p>
        </Col>
        <Col md={3} className="d-md-block d-none">
          <Tilt>
            <img
              src={avatarImg}
              className="img-fluid avatar-image"
              loading="lazy"
            />
          </Tilt>
        </Col>
      </Row>
      <div className="about-container d-none d-md-flex">
        <span className="about-label">{t("introSection.about")}</span>
        <span className="vertical-line"></span>
      </div>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <Suspense fallback={null}>
            <LazyLottie
              width="50%"
              animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
            />
          </Suspense>
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="brand-red text-center">{t("introSection.edu")}</h4>
            </div>
            <div className="w-100">
              <GlowCard identifier={`experience-5`}>
                <div className="relative p-3">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2024-2027</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">
                          {t("introSection.job1")}
                        </p>
                        <p className="company">{t("introSection.school1")}</p>
                        <p className="company">{t("introSection.school1-1")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
            <div className="w-100">
              <GlowCard identifier={`experience-5`}>
                <div className="relative p-3">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2021-2024</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("introSection.job2")}</p>
                        <p className="company">{t("introSection.school2")}</p>
                        <p className="company">{t("introSection.school2-1")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Introduction;
