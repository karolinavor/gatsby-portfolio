import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
    return (
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
    );
}