import React from 'react'
import "./reviewreusable.css"
import { Col, Row } from 'react-bootstrap'

const Reviewreusable = (props) => {
    return (
        <>
            <Col lg={{ span: 8, offset: 2 }}>
                <Row>
                    <Col lg={3}>
                        <div className="item-left">
                            <img src={props.img} alt="" />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="item-right">
                            <p>{props.comment}</p>
                            <h3>{props.name}</h3>
                            <h4>{props.designation}</h4>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Reviewreusable