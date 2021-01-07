import React from 'react';
import styled from 'styled-components';

import Arrow1 from '../assets/arrow1.svg'
import {useSelector} from 'react-redux'


const ArchiveBody = () => {

    const {info} =  useSelector(state => state.body)

    

    return (
        <BodyWrapper className="container my-5 py-3">
            <div className="heading d-flex justify-content-between">
                <div className="sender-receiver">
                    <h6>{info?.subject}</h6>
                    <p>From: {info?.from}</p>
                    <p className="d-flex" style={{marginTop: "-1rem"}}>To: {info.to} <span><img src={Arrow1} alt="arrow1" style={{width: "0.7rem", marginLeft: "0.5rem"}}/></span></p>
                </div>
                <p>{info?.timeStamp}</p>
            </div>
            <p>{info?.body}</p>
        </BodyWrapper>
    )
};

const BodyWrapper = styled.div`
border-top: 1px solid var(--mainWhite);
`

export default ArchiveBody
