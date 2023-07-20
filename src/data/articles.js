import React from "react";

function article_1() {
	return {
		date: "6 May 2022",
		title: "The importance of UI and UX design",
		description:
			"With the technological advancement in the 21st-century, everybody wants to experience the best technology without spending too much of their time and exhausting their busy brains. ",
		keywords: [
			"The importance of UI and UX design",
			
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<h1><a href="https://www.igexsolutions.com/blog/the-importance-of-ui-ux-design/">link to article</a></h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "May 7, 2022",
		title: "Frontend Architecture at Scale for Large Organizations",
		description:
			"How to manage Frontend architecture in large organizations?",
		style: ``,
		keywords: [
			"How to manage Frontend architecture in large organizations?",
			
		],
		body: (
			<React.Fragment>
				<h1><a href="https://medium.com/swlh/frontend-architecture-in-scale-for-large-organizations-593930ed10cd">link to article</a></h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
