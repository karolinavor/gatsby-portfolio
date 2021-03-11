import React from "react";
import { createGlobalStyle } from "styled-components/macro";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
	html, body, div, span, a, h1, h2, h3, h4, h5, h6, p, blockquote, img, 
    ol, ul, li, input, label, select, table, tbody, tfoot, thead, tr, th, 
    td, footer, header, menu, nav, section, video {
		margin: 0;
		padding: 0;
        font-size: 100%; 
        list-style: none; 
        border: 0;
    }

	body {
        max-width: 900px;
        margin: 2rem auto;
        padding: 0 1rem;
        font-size: 16px;
        color: var(--text);
        background: var(--bg);

        a {
            color: var(--text);
        }

        --bg: white;
        --text: #1e2327;
        --textColored: #1e2327;

        &.dark {
            --bg: #1e2327;
            --text: white;
            --textColored: white;
        }
	}
`

export default function Layout(props) {
    return (
        <>
            <Helmet defer={false}>
                <html lang="en" />
                <title>
                    Karolina Vorlickova | Web Developer
                </title>
                <meta 
                    name="author" 
                    content="Karolina Vorlickova" 
                />
                <meta 
                    name="description" 
                    content="I'm junior web developer and CS student based in Brno, Czech Republic." 
                />
                <meta 
                    name="keywords" 
                    content="web,applications,developer,html,css,javascript,react,portfolio,frontend,backend,student,computer science"
                />
                <meta 
                    property="og:title" 
                    content="Karolina Vorlickova | Web Developer" 
                />
                <meta 
                    property="og:description" 
                    content="I'm junior web developer and CS student based in Brno, Czech Republic." 
                />
                <meta 
                    property="og:url" 
                    content="https://karolinavorlickova.cz/" 
                />
                <meta 
                    property="og:image" 
                    content="" 
                />
                <meta 
                    property="og:type" 
                    content="website" 
                />
                <meta 
                    name="twitter:card" 
                    content="summary" 
                />
                <meta 
                    name="twitter:title" 
                    content="Karolina Vorlickova | Web Developer" 
                />
                <meta 
                    name="twitter:description" 
                    content="I'm junior web developer and CS student based in Brno, Czech Republic."
                />
                <meta 
                    name="twitter:site" 
                    content="https://karolinavorlickova.cz/" 
                />
                <meta 
                    name="twitter:image" 
                    content=""
                />
            </Helmet>
            <GlobalStyle />
            <Header />
            <main>
                {props.children}
            </main>
			<Footer />
        </>
    );
};