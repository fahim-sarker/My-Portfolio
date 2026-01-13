import React from 'react'
import "./servicereusable.css"
import { Col } from 'react-bootstrap'

const Servicereusable = (props) => {
  return (
    <>
        <Col lg={4}>
            <div className="service-item">
                {/* <img src={props.sampleimg} alt="" /> */}
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                {/* <a href="#">Take This Service</a> */}
            </div>
        </Col>
    </>
  )
}

export default Servicereusable