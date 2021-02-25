import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Arrow1 from "../../assets/arrow1.svg";
import { useSelector } from "react-redux";

const MailBody = () => {
  const history = useHistory();

  const { info } = useSelector((state) => state.body);

  const backToMails = () => {
    history.push("/");
  };

  return (
    <BodyWrapper className="container my-5 py-3">
      <button onClick={backToMails} className="back-to-mail">
        <FontAwesomeIcon style={{marginRight: '1rem'}} icon={faArrowLeft} />
      </button>
      <div className="heading d-flex justify-content-between">
        <div className="sender-receiver">
          <h6>{info?.subject}</h6>
          <p>From: {info?.from}</p>
          <p className="d-flex" style={{ marginTop: "-1rem" }}>
            To: {info.to}{" "}
            <span>
              <img
                src={Arrow1}
                alt="arrow1"
                style={{ width: "0.7rem", marginLeft: "0.5rem" }}
              />
            </span>
          </p>
        </div>
        <p>{info?.timeStamp}</p>
      </div>
      <p>{info?.body}</p>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  border-top: 1px solid var(--mainWhite);
  .back-to-mail {
    background: none;
    border: none;
    margin: 2rem 0rem;
    outline: none;
  }
`;

export default MailBody;
