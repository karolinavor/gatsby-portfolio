import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	html, body, div, span, a, h1, h2, h3, h4, h5, h6, p, blockquote, img, 
    ol, ul, li, input, label, select, table, tbody, tfoot, thead, tr, th, 
    td, footer, header, menu, nav, section, video {
		margin: 0;
		padding: 0;
        border: 0;
    }

    * {
        box-sizing: border-box; 
    }

    li {
        list-style: none; 
    }

    a {
        text-decoration: none;
        color: var(--link);
    }

	body {
        font-size: 16px;
        font-weight: 400;
        min-height: 100vh;
        color: var(--text);
        background: var(--bg);
        font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif;

        &.light {
            font-weight: 400;
            --bg: white;
            --bg-secondary: #f7f7f7;
            --text: #1e2327;
            --link: #1e2327;
            --hover: blue;
            --hashtag-bg: blue;
            --hashtag-color: white;
            --hashtag-font-weight: 400;
        }

        &.dark {
            font-weight: 300;
            --bg: #121212;
            --bg-secondary: #0f0f0f;
            --text: #cecece;
            --link: #cecece;
            --hover: white;
            --hashtag-bg: #cecece;
            --hashtag-color: black;
            --hashtag-font-weight: 600;
        }
	}

    img {
        max-width: 100%;
        height: auto;
    }

    .p-0 {
        padding: 0;
    }

    .margin-bottom {
        margin-bottom: 1rem;
    }

    .margin-top {
        margin-top: 1rem;
    }
`

export default GlobalStyle
