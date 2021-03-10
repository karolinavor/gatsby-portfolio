import React from "react";
import { createGlobalStyle } from 'styled-components';
import SEO from "../components/SEO";
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

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
		    <SEO />
            <Header />
            {children}
			<Footer />
        </>
    );
};