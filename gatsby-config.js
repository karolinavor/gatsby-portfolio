module.exports = {
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
	]
}
