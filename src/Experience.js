import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const Experience = () => {
	const defaultTexts = [
		{
			title: "Cyber Flow",
			role: "Frontend Developer Intern",
			duration: "Intern",
			date: "SEP 2021 - OCT 2021",
			task: [
				"Designed multiple websites and integrated them with various back-end services and database.",
				"Added analytics, search, filter, add, edit and delete feature in admin panel.",
				"Added payment gateway APIs like Razorpay, Stripe into website.",
			],
		},
		{
			title: "PinnacleWorks Infotech Pvt Ltd.",
			role: "Software Development Intern",
			duration: "Intern",
			date: "JUL 2023 - OCT 2023",
			task: [
				"Conceptualized and implemented innovative features for the QA and ASR portal, enhancing functionality and user experience.",
				"Successfully automated portal processes, reducing manual workload for the QA team by an impressive 40%.",
				"Introduced audio audio trimming and dataset downloading capabilities, further augmenting the websites's utility and efficiency.",
			],
		},
		{
			title: "PinnacleWorks Infotech Pvt Ltd.",
			role: "Software Development Executive",
			duration: "",
			date: "OCT 2023 - OCT 2024",
			task: [
				"Successfully automated portal processes, reducing manual workload for the QA team by an impressive 80%.",
				"Played a pivotal role in optimizing workflows and streamlining processes to enhance team productivity.",
				"Leveraged expertise to contribute to the strategic planning and execution of software development initiatives, ensuring alignment with organizational goals and industry best practices.",
			],
		},
		{
			title: "Teleperforance",
			role: "Software Developer",
			duration: "",
			date: "OCT 2024 - NOW",
			task: [
				"I am responsible for designing and implementing new features to enhance the platform's functionality and improve user experience. This includes refining the layout and design of dashboards to ensure efficient data visualization and seamless interaction.",
				"In addition, I work on adding new functionalities, optimizing existing ones, and troubleshooting issues to ensure the platform's stability and smooth performance. My role allows me to directly contribute to the platform's continuous evolution and drive user satisfaction through thoughtful design and effective functionality improvements.",
			],
		},
	].reverse();

	const [texts, setTexts] = useState(defaultTexts[0]);
	const [current, setCurrent] = useState(0);

	return (
		<div className="table-wrapper">
			<Fade direction="left" distance={"30px"}>
				<div className="xp">
					<h2 className="title">~ Experience</h2>
					<div className="jobs-area">
						<div className="selector">
							{defaultTexts.map(
								(item, index) =>
									(current === index && (
										<div
											onClick={() => {
												setTexts(defaultTexts[index]);
												setCurrent(index);
											}}
											className="items-selected"
										>
											<span>
												{item.title}{" "}
												{item?.duration ? `(${item.duration})` : ""}
											</span>
										</div>
									)) || (
										<div
											onClick={() => {
												setTexts(defaultTexts[index]);
												setCurrent(index);
											}}
											className="items"
										>
											<span>
												{item.title}{" "}
												{item?.duration ? `(${item.duration})` : ""}
											</span>
										</div>
									)
							)}
						</div>
						<div className="table-infos">
							<span className="table-title">
								<strong>{texts.role}</strong>{" "}
								<strong className="orange">@ {texts.title}</strong>
							</span>
							<span className="table-duration">{texts.date}</span>
							<div className="table-all-tasks">
								{texts.task.map((value) => (
									<span className="table-task">{value}</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Experience;
