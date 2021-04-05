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

    h1,h2,h3,h4,h5,h6 {
        font-family: Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial,
        sans-serif;
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

        &.light {
            font-weight: 400;
            --bg: white;
            --bg-secondary: #f7f7f7;
            --text: #1e2327;
            --link: #1e2327;
            // TODO hover
            --hover: rgb(235, 195, 64);
        }

        &.dark {
            font-weight: 300;
            --bg: #121212;
            --bg-secondary: #0f0f0f;
            --text: #cecece;
            --link: #cecece;
            // TODO hover
            --hover: white;
        }
	}
`

export default GlobalStyle
