import React from "react";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <Icon url="https://github.com/karolinavor">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </Icon>
            <Icon url="https://www.linkedin.com/in/karolinavor/">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </Icon>
            <Icon url="mailto:vorlickovakarolina@gmail.com">
                <FontAwesomeIcon icon={faAt} size="2x" />
            </Icon>
        </footer>
    );
};