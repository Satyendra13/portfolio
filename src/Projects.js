import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import styled, { keyframes } from "styled-components";

import codesync from "./assets/codesync.png";
import dropnshare from "./assets/dropnshare.png";
import billinkexp from "./assets/billinkexp.png";

const Projects = () => {
	const projectsInfos = [
		{
			title: "Code Sync",
			photo: codesync,
			description:
				"Real-time collaborative code editor facilitating multiple users to code together. Each new room created is assigned a unique ID for easy access and collaboration. Allows members to collaborate with the host, enabling seamless teamwork and code sharing.",
			github: "https://github.com/Satyendra13/editor-code-sync",
			link: "https://code-sync-siw3.onrender.com/",
			tools: ["ReactJS", "JavaScript", "socket.IO", "NodeJS", "ExpressJS"],
		},
		{
			title: "Drop-N-Share",
			photo: dropnshare,
			description:
				"File-sharing website allowing users to upload and share files, images, etc. Generates download links for uploaded files and offers direct email sharing functionality.",
			github: "https://github.com/Satyendra13/drop-n-share",
			link: "https://drop-n-share.onrender.com/",
			tools: ["ReactJS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB"],
		},
		{
			title: "Billing Expo",
			photo: billinkexp,
			description:
				"Web application built with React for generating and managing invoices. Intuitive interface for inputting customer details, itemizing services, and automating tax and discount calculations; includes printing functionality.",
			github: "https://github.com/Satyendra13/billing-expo",
			link: "https://billing-expo.onrender.com/",
			tools: ["JavaScript", "React", "PDF.JS"],
		},
	];

	const minorProjects = [];

	return (
		<div className="projects-wrapper" style={{ overflow: "hidden" }}>
			<div className="projects">
				<h2 className="title">~ projects</h2>
				<div className="projects-area">
					{projectsInfos.map((item, index) => (
						<div className="project-container">
							{(index % 2 === 0 && <LeftProject item={item} />) || (
								<RightProject item={item} />
							)}
						</div>
					))}
				</div>

				<MinorProjects projects={minorProjects} />
			</div>
		</div>
	);
};

const LeftProject = (props) => {
	const ref = useRef(null);

	const Tool = styled.div`
		background-color: #0d0024;
		color: white;
		margin: 5px;
		border-radius: 6px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 10px;
		font-size: 16px;
	`;

	const [size, setSize] = useState(0);
	const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(-${size}px)}
    `;

	const [speed, setSpeed] = useState(10);
	const SlideTrack = styled.div`
		animation: ${scroll} ${speed}s linear infinite;
		display: flex;
		width: 100%;
		flex-direction: row;
	`;

	useEffect(() => {
		var size = 15;
		for (let i = 0; i < ref.current.children.length / 2; i++) {
			size += ref.current.children[i].offsetWidth;
			size += 7;
		}
		setSize(size);
		setSpeed(ref.current.children.length);
	}, []);

	const item = props.item;

	return (
		<Fade
			style={{ width: "100%", height: "100%" }}
			direction="right"
			distance={"30px"}
		>
			<div className="left-project">
				<div className="project-image-wrapper">
					<img src={item.photo} alt="" />
					<div className="grainy" />
				</div>
				<div className="left-project-description">
					<div className="orange">{item.title}</div>
					<span>{item.description}</span>
				</div>
				<div className="left-project-links">
					{item.link !== "" && (
						<a href={item.link} target="_blank" rel="noreferrer">
							<LaunchIcon className="icon" />
						</a>
					)}
					{item.github !== "" && (
						<a href={item.github} target="_blank" rel="noreferrer">
							<GitHubIcon className="icon" />
						</a>
					)}
				</div>
				<div className="left-project-tools">
					<SlideTrack ref={ref}>
						{item.tools.map((item) => (
							<Tool>{item}</Tool>
						))}
						{item.tools.map((item) => (
							<Tool>{item}</Tool>
						))}
					</SlideTrack>
				</div>
			</div>
		</Fade>
	);
};

const RightProject = (props) => {
	const ref = useRef(null);

	const Tool = styled.div`
		background-color: #0d0024;
		color: white;
		margin: 5px;
		border-radius: 6px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 10px;
		font-size: 16px;
	`;

	const [size, setSize] = useState(0);
	const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(${size}px)}
    `;

	const [speed, setSpeed] = useState(10);
	const SlideTrack = styled.div`
		animation: ${scroll} ${speed}s linear infinite;
		display: flex;
		width: 100%;
		flex-direction: row-reverse;
	`;

	useEffect(() => {
		var size = 15;
		for (let i = 0; i < ref.current.children.length / 2; i++) {
			size += ref.current.children[i].offsetWidth;
			size += 7;
		}
		setSize(size);
		setSpeed(ref.current.children.length);
	}, []);

	const item = props.item;
	console.log(item);
	return (
		<Fade
			style={{ width: "100%", height: "100%" }}
			direction="left"
			distance={"30px"}
		>
			<div className="right-project">
				<div className="project-image-wrapper">
					<img src={item.photo} alt="" />
					<div className="grainy" />
				</div>
				<div className="right-project-description">
					<div className="orange">{item.title}</div>
					<span>{item.description}</span>
				</div>
				<div className="right-project-links">
					{item.link !== "" && (
						<a href={item.link} target="_blank" rel="noreferrer">
							<LaunchIcon className="icon" />
						</a>
					)}
					{item.github !== "" && (
						<a href={item.github} target="_blank" rel="noreferrer">
							<GitHubIcon className="icon" />
						</a>
					)}
				</div>
				<div className="right-project-tools">
					<SlideTrack ref={ref}>
						{item.tools.map((item) => (
							<Tool>{item}</Tool>
						))}
						{item.tools.map((item) => (
							<Tool>{item}</Tool>
						))}
					</SlideTrack>
				</div>
			</div>
		</Fade>
	);
};

const MinorProjects = (props) => {
	const [minorProjectIndex, setMinorProjectIndex] = useState();

	return (
		<div className="minor-projects-area">
			{props.projects.map((item, index) => (
				<div className="minor-project">
					<div
						className="minor-project-title"
						onClick={() => {
							if (index !== minorProjectIndex) {
								setMinorProjectIndex(index);
							} else {
								setMinorProjectIndex();
							}
						}}
					>
						<span className="orange">{item.title}</span>
						{(index === minorProjectIndex && (
							<span className="orange">-</span>
						)) || <div className="orange">+</div>}
					</div>
					{index === minorProjectIndex && (
						<Fade direction="down" duration={500}>
							<div className="minor-project-expand">
								<span className="minor-project-description">
									{item.description}
								</span>
								<div className="minor-projects-footer">
									<div className="minor-projects-tools">
										{item.tools.map((item) => (
											<div className="tool">{item}</div>
										))}
									</div>
									<div className="minor-projects-links">
										{item.link !== "" && (
											<a href={item.link} target="_blank" rel="noreferrer">
												<LaunchIcon className="icon" />
											</a>
										)}
										{item.github !== "" && (
											<a href={item.github} target="_blank" rel="noreferrer">
												<GitHubIcon className="icon" />
											</a>
										)}
									</div>
								</div>
							</div>
						</Fade>
					)}
				</div>
			))}
		</div>
	);
};

export default Projects;
