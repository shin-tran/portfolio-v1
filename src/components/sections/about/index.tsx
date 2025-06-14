import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import avatarImg1 from "@assets/about.jpg";
import Divider from "@components/sections/divider";
import Experience from "@components/sections/experience";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Ảnh đại diện ở trên */}
      <Row className="d-flex justify-content-center text-center">
        <Col xs={12} md={6}>
          <img src={avatarImg1} className="about-image" />
        </Col>
      </Row>

      {/* Nội dung giới thiệu nằm dưới ảnh */}
      <Row className="about-content">
        <Col xs={12}>
          <h3 className="mb-4 text-center">
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
              {t("about.li10")} <strong>1 {t("about.li11")}</strong>{" "}
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

      {/* Work Experience */}
      <Divider />
      <section>
        <Container>
          <Experience />
        </Container>
      </section>

      <Divider />
      <div className="mb-5"></div>
    </>
  );
};

export default About;
