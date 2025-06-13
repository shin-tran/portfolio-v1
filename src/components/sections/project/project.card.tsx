import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

interface IProps {
  images: string[]; // sử dụng mảng ảnh
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  techs: {
    group: string;
    items: string[];
  }[];
  namePro: string; // ✅ thêm dòng này
}

function ProjectCard(props: IProps) {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.images?.[0]}
          alt="プロジェクトの写真"
          style={{ maxHeight: 215 }}
        />

        <Card.Body
          className="d-flex flex-column justify-content-between"
          style={{ minHeight: 230 }}
        >
          <Card.Title>{t(props.title)}</Card.Title>

          <Card.Text style={{ textAlign: "justify" }}>
            {t(props.description)}
          </Card.Text>

          {/* Nút căn giữa */}
          <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
            <Button
              variant="primary"
              href={props.githubLink}
              target="_blank"
              className="px-3"
            >
              <BsGithub className="me-1" />
              GitHub
            </Button>

            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="px-3"
            >
              {/* <CgWebsite className="me-1" /> */}
              🌐Demo
            </Button>

            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              className="px-3"
            >
              {t("projectModal.detail") ?? "Chi tiết"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={{
          title: props.title,
          description: props.description,
          images: props.images,
          githubLink: props.githubLink,
          demoLink: props.demoLink,
          techs: props.techs, // hoặc props.techs nếu có
          namePro: props.namePro, // ✅ thêm dòng này để truyền `key` cho translation
        }}
      />
    </>
  );
}
export default ProjectCard;
