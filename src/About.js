import { Fade } from "react-awesome-reveal";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import profile from "./assets/profile.png";
import { useEffect, useState } from "react";

const About = () => {
	const [randomZ, setRandomZ] = useState(0);
	useEffect(() => {
		const define = Math.ceil(Math.random() * 100);
		if (define % 2) {
			setRandomZ(-1);
		} else {
			setRandomZ(1);
		}
	}, []);

	const techs = [
		"JavaScript",
		"React.js",
		"Next.js",
		"Laravel",
		"PHP",
		"Python",
		"Flask",
		"API Integration",
		"SQL",
		"MongoDB",
	];

	return (
		<div className="session-wrapper">
			<ParallaxProvider>
				<Fade direction="down" fraction={0.3}>
					<div className="about">
						<h2 className="title">~ About me</h2>
						<span className="bio">
							I'm a <strong className="orange">software developer</strong> based
							in Gurgaon, India, with a passion for technology and a strong
							drive to continuously learn and innovate. I love tackling{" "}
							<strong className="orange">challenges</strong> and{" "}
							<strong className="orange">solve problems</strong> through
							efficient, <strong className="orange">well-structured</strong>{" "}
							code.
						</span>
						<span className="bio">
							I hold a B.Tech degree in Computer Science from Panipat Institute
							of Engineering and Technology, Haryana. Currently, I am working as
							a Software Developer at{" "}
							<strong className="orange">Teleperformance</strong>,where I
							contribute to dynamic projects, constantly learning and expanding
							my knowledge in the software development field.
						</span>
						<span className="bio">
							I have abillities on the following tools:
						</span>
						<div className="techs">
							{techs.map((tech) => (
								<span>{tech}</span>
							))}
						</div>
						<span className="bio" style={{ marginTop: "10px" }}>
							Furthermore, I speak Hindi fluently as my native language, and I
							am also fluent in English.
						</span>
					</div>
				</Fade>
				<Parallax className="photos" speed={-17}>
					<div
						className="ball"
						style={{
							bottom: 0,
							left: 0,
							marginBottom: "-50px",
							marginLeft: "-50px",
							zIndex: randomZ,
						}}
					/>
					<div
						className="ball"
						style={{
							top: 0,
							right: 0,
							marginTop: "-50px",
							marginRight: "-50px",
							zIndex: randomZ * -1,
						}}
					/>
					<div className="photo-wrapper">
						<img src={profile} alt="" />
					</div>
				</Parallax>
			</ParallaxProvider>
		</div>
	);
};

export default About;
