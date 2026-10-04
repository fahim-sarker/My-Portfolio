import "./servicereusable.css";
import { Col } from "react-bootstrap";

const Servicereusable = ({ icon, title, para }) => {
  return (
    <Col lg={4} md={6} xs={12}>
      <div className="service-item">
        {icon && <div className="service-icon">{icon}</div>}
        <h2>{title}</h2>
        <p>{para}</p>
      </div>
    </Col>
  );
};

export default Servicereusable;