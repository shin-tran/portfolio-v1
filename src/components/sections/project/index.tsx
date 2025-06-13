import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { PROJECTS } from "@helpers/data";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="project-header text-center">{t("project.title")}</h3>
          <h6 className="project-description mb-md-5 mb-2 text-center">
            {t("project.title2")} &nbsp;
            <a
              className="project-link"
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy
            </a>
            , &nbsp;
            <a
              className="project-link"
              href="https://fullstack.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              F8-Fullstack
            </a>
            , &nbsp;
            <a
              className="project-link"
              href="https://hoidanit.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hỏi Dân IT
            </a>
            , &nbsp;
            <a
              className="project-link"
              href="https://edu.duthanhduoc.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dư Thanh Dược
            </a>
            {t("project.title3")}
            {t("project.title4")}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {PROJECTS?.map((item) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={4}
              className="project-card mb-4"
              key={item.id}
            >
              <ProjectCard
                images={item.images}
                title={item.title}
                description={item.description}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
                techs={item.techs}
                namePro={item.namePro}
              />
            </Col>
          );
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
