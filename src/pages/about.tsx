import { lazy, Suspense } from "react";
import Fallbacks from "@components/skeletons/fallbacks";
import { Container } from "react-bootstrap";
import bg from "@assets/section.svg";

const About = lazy(() => import("@components/sections/about"));

const AboutPage = () => {
  return (
    <div className="about-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>
      <section className="mt-md-5 t-md-5 mt-2 pt-0">
        <Container>
          <Suspense fallback={Fallbacks.About}>
            <About />
          </Suspense>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
