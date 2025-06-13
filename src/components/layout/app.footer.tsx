import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="my-3 mt-2 text-center text-sm">
      <p className="slogan px-4 text-center text-2xl sm:text-lg md:text-xl">
        {t("appFooter.slogan")}
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} Ngoc ShinTran Frontend Dev
      </p>
    </div>
  );
};

export default AppFooter;
