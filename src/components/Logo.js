import React from "react";
import { Link } from "gatsby";
import LogoImg from "../images/logo.png";

export default function Logo(props) {
    return (
        <Link to="/" >
            <img src={LogoImg} alt="Logo" width={props.size} height={props.size}></img>
        </Link>
    );
};