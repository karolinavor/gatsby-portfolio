import React from "react";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

export default function Home() {
	return ( 
		<Layout>
			<Heading>I'm junior web developer and CS student based in Brno, Czech Republic.</Heading>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at leo at erat varius consectetur sed at neque. Phasellus venenatis justo eget iaculis aliquam. In hac habitasse platea dictumst. Morbi nec orci id mi eleifend varius. Praesent nec odio sed enim hendrerit imperdiet. Aenean elementum turpis erat, sollicitudin dapibus enim dignissim eget. Maecenas a placerat dolor, at volutpat eros. Integer malesuada dolor pellentesque gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim metus, ullamcorper nec neque accumsan, commodo ultrices mi. Phasellus consectetur felis metus, at auctor massa rhoncus nec. Etiam nibh ex, ultricies sed risus eget, elementum dapibus dui. Duis eget faucibus urna.</Paragraph>
			<ProjectSection />
		</Layout>
	);
};
