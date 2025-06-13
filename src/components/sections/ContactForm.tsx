import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
//import axios from "axios";
//import { toast } from "react-toastify";
//import * as axios from "axios";
//import * as toast from "react-toastify";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Col } from "react-bootstrap";
// import AnimationLottie from "@/components/share/animation-lottie";
// import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import ResizeButton from "@components/sections/resize.button";

//toast.configure(); // Cấu hình toast một lần trong component

const ContactForm = () => {
  const { t } = useTranslation();

  //const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const checkRequired = () => {
  //     if (userInput.email && userInput.message && userInput.name) {
  //         setError({ ...error, required: false });
  //     }
  // };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      toast.error(t("toast.required"));
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name: userInput.name, // Phải khớp với {{name}}
      email: userInput.email, // Phải khớp với {{email}}
      message: userInput.message, // Phải khớp với {{message}}
    };

    emailjs
      .send(
        "service_1d03xnb", // Thay bằng Service ID của bạn
        "template_1rpxyki", // Thay bằng Template ID của bạn
        templateParams,
        "HjV1dyYbgw3ztJ849", // Thay bằng Public Key của bạn
      )
      .then(() => {
        toast.success(t("toast.success"));
        setUserInput({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Lỗi gửi email:", error);
        toast.error(t("toast.error"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-form">
      <p className="title">{t("contact.title2")}</p>
      <form className="form-container" onSubmit={handleSendMail}>
        <p className="description">{t("contact.title3")}</p>

        <div className="input-group">
          <label>
            {t("contact.name")}
            <span className="required">{t("contact.required")}</span>
          </label>
          <input
            type="text"
            value={userInput.name}
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <label>
            {t("contact.mail")}
            <span className="required">{t("contact.required")}</span>
          </label>
          <input
            type="email"
            value={userInput.email}
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
            required
          />
        </div>

        <div className="input-group">
          <label>
            {t("contact.mes")}
            <span className="required">{t("contact.required")}</span>
          </label>
          <textarea
            rows={4}
            value={userInput.message}
            onChange={(e) =>
              setUserInput({ ...userInput, message: e.target.value })
            }
            required
          />
        </div>

        <div className="submit-btn-wrapper">
          <ResizeButton
            btnText={isLoading ? t("toast.mes") : t("contact.send")}
            btnIcons={!isLoading && <TbMailForward />}
            btnStyle={{
              background: "linear-gradient(90deg, #ff416c, #8d4fff)",
              color: "#fff",
              border: "none",
              padding: "15px 25px",
              borderRadius: "50px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
              width: "auto", // Để nút tự động co lại theo nội dung
              fontWeight: "bold",
              minWidth: "120px",
            }}
            // onClick={
            //     !isLoading
            //         ? () => handleSendMail(new Event("submit") as unknown as React.FormEvent)
            //         : undefined
            // }
          />
        </div>

        {/* Thêm ToastContainer để hiển thị thông báo */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
