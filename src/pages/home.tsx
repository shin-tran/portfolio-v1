import { lazy, Suspense } from "react";
import Fallbacks from "@components/skeletons/fallbacks";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "@components/sections/hero/hero.left";
import HeroRight from "@components/sections/hero/hero.right";
import bg from "@assets/section.svg";
import Divider from "@components/sections/divider";

const Skill = lazy(() => import("@components/sections/skill"));
const Introduction = lazy(() => import("@components/sections/introduction"));
const ContactSection = lazy(
  () => import("@components/sections/ContactSection"),
);

const HomePage = () => {
  const skillRef = useRef<HTMLElement>(null);

  const scrollToSkillSection = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="homepage-screen">
      <img
        src={bg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "500px",
          zIndex: 0,
          objectFit: "cover",
          pointerEvents: "none", // không ảnh hưởng đến click/tương tác
        }}
        loading="eager" // ưu tiên tải sớm
      />

      <section className="mt-md-7 mt-2">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col className="d-flex d-md-block" md={6}>
              <HeroLeft scrollToSkillSection={scrollToSkillSection} />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Suspense fallback={Fallbacks.Page}>
            <Introduction />
          </Suspense>
        </Container>
      </section>

      <Divider />
      <section ref={skillRef}>
        <Container>
          <Suspense fallback={Fallbacks.Page}>
            <Skill />
          </Suspense>
        </Container>
      </section>

      <Divider />
      <section id="contact">
        <Suspense fallback={Fallbacks.Page}>
          <ContactSection />
        </Suspense>
      </section>
    </div>
  );
};

export default HomePage;