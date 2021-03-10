import React from "react";
import { createGlobalStyle } from 'styled-components';
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
	html,body {
		margin: 0;
		padding: 0;
        width: 100%;
		height: 100%;
    }

	body {
		font-size: 16px;
        margin: 3rem auto;
        max-width: 900px;
        padding: 0 1rem;
	}
`

export default function Layout(props) {
    return (
        <>
            <Helmet>
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
                    content="web,applications,developer,html,css,javascript,portfolio,frontend,backend,student,computer science"
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
            {props.children}
			<Footer />
        </>
    );
};