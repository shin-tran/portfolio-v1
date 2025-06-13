import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { useCurrentApp } from "@components/context/app.context";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import viFlag from "@assets/svg/language/vi.svg";
import usFlag from "@assets/svg/language/us.svg";
import { useNavigate, useLocation } from "react-router";

type ThemeContextType = "light" | "dark";

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMode = (mode: ThemeContextType) => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-bs-theme", mode);
    setTheme(mode);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      // Chờ trang tải hoàn toàn rồi mới cuộn
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // Điều chỉnh thời gian nếu cần
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Navbar
      data-bs-theme={theme}
      expand="lg"
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      style={{ zIndex: 9 }}
    >
      <Container>
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="brand-green">{t("appHeader.brand")}</span>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Trang chủ - Chỉ sáng nếu đang ở Home và KHÔNG có hash */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link disable-active" : "nav-link"
              }
              to="/"
              end
              onClick={() => {
                window.history.replaceState(null, "", "/");
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
              }}
            >
              🏠{t("appHeader.home")}
            </NavLink>

            <NavLink
              className="nav-link"
              to="/project"
              onClick={() => window.scrollTo(0, 0)}
            >
              📂{t("appHeader.project")}
            </NavLink>

            <NavLink
              className="nav-link"
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
            >
              💁‍♀️{t("appHeader.about")}
            </NavLink>

            {/* Liên hệ - Chỉ sáng khi đã cuộn xuống phần Contact */}
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link" : "nav-link")}
              to="/#contact"
              onClick={scrollToContact}
            >
              📬{t("appHeader.contact")}
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            <div
              className="nav-link gap-2"
              style={{
                cursor: "pointer",
                placeItems: "center",
              }}
              onClick={() => handleMode(theme === "light" ? "dark" : "light")} // Xử lý click trên cả div
            >
              {theme === "light" ? (
                <>
                  <MdOutlineLightMode style={{ fontSize: 20 }} />
                  {/* <span className="nav-text theme">
                    {t("appHeader.darkMode")}
                  </span> */}
                </>
              ) : (
                <>
                  <MdNightlight style={{ fontSize: 20 }} />
                  {/* <span className="nav-text theme">
                    {t("appHeader.lightMode")}
                  </span> */}
                </>
              )}
            </div>

            <NavDropdown
              title={
                <div className="nav-text d-flex gap-2" >
                  <img
                    style={{ height: 20, width: 20 }}
                    src={i18n.resolvedLanguage === "en" ? usFlag : viFlag}
                  />
                  {/* <span className="nav-text theme">
                    {t("appHeader.language")}
                  </span> */}
                </div>
              }
              style={{
                paddingBottom: "0",
                display: "flex",
                placeItems: "center",
              }}
            >
              <div
                onClick={() => i18n.changeLanguage("en")}
                className="dropdown-item d-flex gap-2"
                style={{ cursor: "pointer" }}
              >
                <img style={{ height: 20, width: 20 }} src={usFlag} />
                <span>{t("appHeader.language1")}</span>
              </div>
              <div
                onClick={() => i18n.changeLanguage("vi")}
                className="dropdown-item d-flex gap-2"
                style={{ cursor: "pointer" }}
              >
                <img style={{ height: 20, width: 20 }} src={viFlag} />
                <span>{t("appHeader.language2")}</span>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
