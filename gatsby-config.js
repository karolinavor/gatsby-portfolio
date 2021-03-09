module.exports = {
	siteMetadata: {
		title: `Karolina Vorlickova`,
		description: ``,
    	author: `Karolina Vorlickova`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  	name: `src`,
			  	path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `Karolina Vorlickova`,
			  short_name: `Karolina Vorlickova`,
			  start_url: `/`,
			  background_color: `#663399`,
			  theme_color: `#663399`,
			  display: `minimal-ui`,
			  icon: `/static/favicon`, // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-offline`,
	]
}
