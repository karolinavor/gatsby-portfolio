import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

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
        &.light {
            font-weight: 400;
            --bg: white;
            --bg-secondary: #f7f7f7;
            --text: #1e2327;
            --link: #1e2327;
            --hover: #808080;
        }

        &.dark {
            font-weight: 300;
            --bg: #121212;
            --bg-secondary: #0f0f0f;
            --text: #cecece;
            --link: #cecece;
            --hover: white;
        }

        font-size: 16px;
        color: var(--text);
        background: var(--bg);

        a {
            text-decoration: none;
            color: var(--link);
        }
	}
`

export default GlobalStyle
