import SkeletonCard from "./SkeletonCard";
import { Row, Col } from "react-bootstrap";

const SkeletonProjectGrid = ({ count = 6 }: { count?: number }) => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {Array.from({ length: count }).map((_, index) => (
        <Col xs={12} sm={6} md={4} className="project-card mb-4" key={index}>
          <SkeletonCard />
        </Col>
      ))}
    </Row>
  );
};

export default SkeletonProjectGrid;
