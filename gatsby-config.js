module.exports = {
	siteMetadata: {
		// If you didn't use the resolveSiteUrl option this needs to be set
		siteUrl: `https://www.karolinavorlickova.cz`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-XBEYBJXKRS", // Google Analytics / GA
				],
				// This object gets passed directly to the gtag config command
				// This config will be shared across all trackingIds
				gtagConfig: {
					optimize_id: "OPT_CONTAINER_ID",
					anonymize_ip: true,
					cookie_expires: 0,
				},
				// This object is used for configuration specific to this plugin
				pluginConfig: {
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is also optional
				respectDNT: true,
				},
			},
		},
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
