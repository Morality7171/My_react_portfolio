import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./mom's.jpg"
								alt="mom's"
								className="work-image"
							/>
							<div className="work-title">Mom's organic market</div>
							<div className="work-subtitle">
								Team member
							</div>
							<div className="work-duration">February 2018- March 2019</div>
						</div>

						<div className="work">
							<img
								src="./tempus.jpg"
								alt="tempus"
								className="work-image"
							/>
							<div className="work-title">Tempus 2000</div>
							<div className="work-subtitle">
							Computer technician
							</div>
							<div className="work-duration"> March 2022- February 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
