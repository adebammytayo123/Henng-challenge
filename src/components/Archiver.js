import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import Calender from '../assets/calender.svg';
import Search from '../assets/search.svg';
import Arrow1 from '../assets/arrow1.svg';
import Logo from '../assets/logo.png';
import Clip from '../assets/clip.svg';
import Mail from '../assets/mail.svg';
import Arrow2 from '../assets/arrow2.svg';
import styled from 'styled-components';

import { setBody } from "../state/actions/body"

import  mailInfo from "./data";

const Inbox = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [input, setInput] = useState("");
    const [mails, setMails] = useState(mailInfo);
    const [activeBackground, setActiveBackground] = useState("");

    const [searchParameter, setSearchParameter] = useState("timeStamp");


    const handleActiveBackground = (activeBackground) => {
        setActiveBackground(activeBackground);
        // console.log("active", activeBackground)
    };

    const handleBody = (id) => {
        const body = mails.find(mail => mail.id === id);
        console.log("boddy", body)
        dispatch(setBody(body))
        history.push("/body")
      };

    const truncateString = (str) => {
        if (str.length <= 15) {
            return str;
        }
        return str.slice(0, 15) + "..."
    }
    const truncatedString = (str) => {
        if (str.length <= 12) {
            return str;
        }
        return str.slice(0, 15) + "..."
    }


    const dateFilter = (min, max) => {
       return mails.filter((mail) => {
            if (
                Date.parse(mail[searchParameter]) >= Date.parse(min) &&
                Date.parse(mail[searchParameter]) <= Date.parse(max)
    
            ) {
                return mail;
            }
            // return mail
        }
        ) 
    }

    const inputHandler = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)

    };

   

    const handleSubmit = (e) => {
        e.preventDefault()
        const [min, max] = input.split("-")
        const filtered = dateFilter(min, max)
        setMails(filtered)
        setSearchParameter(input);
        setInput("")

    }

    

    return (
        <ContainerWrapper className=" py-5">
            <div className="archive-search col-10 d-flex">
                <div className="search-input mb-5">
                    <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        value={input}
                        onChange={inputHandler}
                    />
                    <img src={Calender} alt="calender" className="calender" />
                    <button type="submit" className="search">
                        <img 
                        src={Search} alt="search"  />
                    </button>
                   </form>
                </div>
            </div>
            <div className="wrapper col-10 d-block  px-0 ">
                <div className="results ">
                    <h5><span>Results: </span>{mails.length}mail(s)</h5>
                </div>
                {mails.length > 0 ? (
                    <div className="table px-0">
                        <table>
                            <thead>
                                <tr>
                                    <th>from</th>
                                    <th>to</th>
                                    <th style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>subject</th>
                                    <th className="d-flex align-items-center" style={{ paddingLeft: "5rem", color: "black" }}>date
                            <img src={Arrow1} style={{ width: "10%", paddingLeft: "0.5rem", color: "black" }} alt="arrow1" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {mails.map(({ id, from, to, subject, timeStamp, src }) => (
                                            <tr
                                            key={id}
                                            onClick={() => {
                                                
                                                handleActiveBackground(id)
                                                handleBody(id)
                                            }}
                                            className={
                                                activeBackground === id ? "active" : ""
                                            }
                                        >
                                            <td>{truncateString(from)}</td>
                                            <td>{to}</td>
                                            <td>{subject}</td>
                                            <td style={{ color: "black", }}>
                                                {src ? <img src={Clip} alt="" style={{ width: "8%", marginLeft: "1rem", marginRight: "-2.8rem" }} /> : ""}
                                                <span style={{ marginLeft: "4rem", }}> {timeStamp}</span>   </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                    )}

            </div>
            {mails.length > 0 ? (
                <div className="mobile-archive">
                <div className="mobile-headings d-flex py-3">
                    <h5 className="from d-flex pr-2">From <span><img src={Arrow1} alt="arrow1" style={{ width: "1.3rem", margin: "0", paddingLeft: "0.5rem" }} /></span></h5>
                    <h5 className="to px-2">To</h5>
                    <h5 className="subject px-2">Subject</h5>
                    <h5 className=" px-2">Date</h5>
                </div>
                <div className="mobile-body">
                {mails.map(({id,from, to, subject, timeStamp, src }) => (
                    <div className="mobile-data py-3">
                        <div
                             key={id}
                             onClick={() => {
                                 
                                 handleActiveBackground(id)
                                 handleBody(id)
                             }}
                             className={
                                 activeBackground === id ? "active" : ""
                             }
                        >
                        <div className="from-to-data d-flex justify-content-between">
                        <div className=" d-flex">
                            <img src={Mail} alt="mail" style={{width: "1.2rem", marginRight: "0.5rem"}}/>
                                <div className="d-block">
                                    <h5>{truncatedString(from)}</h5>
                                    <h6>{to}</h6>
                                </div>
                            </div>
                            <h6>
                            {src ? <span><img src={Clip} alt="" style={{ width: "8%" }} /> </span> : ""}
                                {timeStamp} <span><img src={Arrow2} alt="arrow2" style={{ width: "0.3rem", marginTop: "-0.3rem" }} /></span></h6>
                        </div>
                        <p className="subject-data">{subject}</p>
                        </div>
                        
                    </div>
               ))}
            </div>
            </div>
            ): (
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            )}
            
        </ContainerWrapper>
    )
};

const ContainerWrapper = styled.div`
background: white;
width: 100%;
height: 100vh;
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
overflow-x: hidden;
color: var(-mainDark);
.archive-search {
    margin-left: 3rem;
    margin-right: 3rem;
    @media (max-width: 400px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
    @media (max-width: 500px) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
}
.search-input {
    display: flex;

.input {
    position: relative;
    width: 19rem;
    height: 45px;
    border: 2px solid var(--mainWhite);
    border-radius: 8px;
    outline: none;
    padding-left: 3rem;
    padding-right: 3rem;
}.calender {
    position: absolute;
    width: 2.6rem;
    padding: 0.7rem;
    left: 1rem;
}
.search {
    position: absolute;
    width: 2.8rem;
    left: 17.1rem;
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    background: var(--mainWhite) !important;
    border: 0,0,0 1px solid var(--LightDark);
    outline: none;
}
}

.wrapper {
    margin-left: 4rem;
    margin-right: -2rem;
    @media (max-width: 400px) {
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
    @media (max-width: 500px) {
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
}
.results {
    color: var(--mainDark) !important;
}
.table {
        color: var(--mainDark);
    @media (max-width: 400px) {
        display: none;
    }
    @media (max-width: 500px) {
        display: none;
    }
    thead {
        text-transform: capitalize;
        background: var(--mainWhite);
    }
    tr {
        color: var(--mainDark);
        cursor: pointer;
        &.active{
            background-color: var(--mainWhite) !important;
            color: var(--mainBlue) !important;
        }
    }
    tr:hover {
            color: var(--mainBlue) !important;
            background-color: var(--mainWhite) !important;
    }
    td{ 
        font-family: sans-serif;
        font-weight: bold;
    }
    
   
    
}
.logo {
    border-top : 1px solid var(--lighterDark);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-top: 10rem;
        width: 15%;
    }
}
.mobile-archive {
    display: none;
    /* max-height: 500px; */
    overflow-y: scroll;
    @media (max-width: 400px) {
        display: block;
    }
    @media (max-width: 500px) {
        display: block;
    }

}
.mobile-headings {
    background: var(--mainWhite);
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    border-top: 1px solid var(--lighterDark);
    border-bottom: 1px solid var(--lighterDark);
    color: var(--mainDark);
    .from {
        color: black;
        border-right: 1px solid var(--mainDark);
    }
    .to {
        border-right: 1px solid var(--mainDark);
    } 
    .subject {
        border-right: 1px solid var(--mainDark);
    }
}
.mobile-data {
    border-top: 1px solid var(--lightDark);
    border-bottom: 1px solid var(--lighterDark);
    &.active{
            background-color: var(--mainWhite) !important;
            color: var(--mainBlue) !important;
    }
}
.from-to-data {
    padding-left: 2.5rem;
    padding-right: 1rem;
}
.subject-data {
    padding-left: 2.5rem;
    padding-right: 0.5rem;
}
div {
    &.active{
            background-color: var(--mainWhite) !important;
            color: var(--mainBlue) !important;
        }
}
div:hover {
            color: var(--mainBlue) !important;
            background-color: var(--mainWhite) !important;
    }
`

export default Inbox;
