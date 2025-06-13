// import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Fallbacks from "@components/skeletons/fallbacks";
import { Container } from "react-bootstrap";
import bg from "@assets/section.svg";

<header>
  <title>自己紹介 | ハン | フロントエンド開発者・ポートフォリオ</title>
  <meta
    name="description"
    content="React, TypeScript, Javascript, HTML, CSS, Bootstrap を使ったフロントエンド開発者・グェン ティ タィン ハン の プロフィール、経験、スキル、フロントエンド学習の道のりをご紹介します。"
  />
  <meta
    name="keywords"
    content="ポートフォリオ, フロントエンド, React, TypeScript, Javascript, HTML, CSS, Bootstrap Web開発, Scss, Sass, SEO, 開発者, グェン ティ タィン ハン, 自己紹介"
  />
  <meta name="author" content="グェン ティ タィン ハン" />
  <meta
    property="og:title"
    content="自己紹介 | ハン | フロントエンド開発者・ポートフォリオ"
  />
  <meta
    property="og:description"
    content="React, TypeScript, Javascript, HTML, CSS, Bootstrap を使ったフロントエンド開発者・グェン ティ タィン ハン の プロフィール、経験、スキル、フロントエンド学習の道のりをご紹介します。"
  />
  <meta property="og:url" content="https://hang-frontend.jp/" />
  <meta property="og:image" content="/demo-project.png" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</header>;

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
