import Typewriter from "typewriter-effect";
import SocialMedia from "@components/sections/social.media";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import ResizeButton from "@components/sections/resize.button";
import { APP_DATA } from "@helpers/data";
import { AiFillFire } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";

interface IProps {
  scrollToSkillSection: () => void;
}
const HeroLeft = (props: IProps) => {
  const { t } = useTranslation();

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleDownloadCV = () => {
    openInNewTab(
      "https://drive.google.com/file/d/1O8rhk4pKhfBShATBdd6mQYV70uwtR0Hj",
    );
  };
  return (
    <div className="hero-left">
      <h3>
        {t("heroSection.greeting")}{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        {t("heroSection.im")} &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong> &nbsp;
        {t("heroSection.after")}
      </h3>

      <Typewriter
        options={{
          strings: [
            t("heroSection.job1"),
            t("heroSection.job2"),
            t("heroSection.job3"),
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />

      <div className="social-icons mt-md-6 mb-md-5 mt-3 mb-2">
        <SocialMedia
          github={APP_DATA.GITHUB_URL}
          email={APP_DATA.EMAIL}
          phone={APP_DATA.PHONE}
          facebook={APP_DATA.FACEBOOK_URL}
        />
      </div>

      <div className="hero-buttons d-md-flex gap-2">
        <ResizeButton
          onClick={props.scrollToSkillSection}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white)",
          }}
        />
        <ResizeButton
          btnText={t("heroSection.cv")}
          btnIcons={<FaEye />}
          onClick={handleDownloadCV}
          btnStyle={{
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
