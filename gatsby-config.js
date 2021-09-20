module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "G-XBEYBJXKRS",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
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
		}
	]
}
