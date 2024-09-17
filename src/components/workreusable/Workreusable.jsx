import React from 'react'
import { Col } from 'react-bootstrap'
import "./workreusable.css"

const Workreusable = (props) => {
    return (
        <>
            <Col lg={4}>
                <div className="project">
                    <img src={props.image} alt="" className='w-100' />
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <a href={props.github} target='blank'>GitHub</a>
                    <a href={props.livesite} target='blank'>Live Site</a>
                </div>
            </Col>
        </>
    )
}

export default Workreusable