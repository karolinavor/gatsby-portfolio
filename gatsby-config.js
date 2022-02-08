module.exports = {
	siteMetadata: {
		// If you didn't use the resolveSiteUrl option this needs to be set
		siteUrl: `https://www.karolinavorlickova.cz`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-dark-mode`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  	name: `src`,
			  	path: `${__dirname}/src/`,
			},
		},
		`gatsby-plugin-sitemap`,
	]
}
