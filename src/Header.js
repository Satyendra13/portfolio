import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="header">
				<div className="nav">
					<span
						onClick={() => {
							window.scrollTo(0, 0);
						}}
					>
						Satyendra
					</span>
				</div>
				<div className="links">
					<a
						href="https://www.linkedin.com/in/satyendra13/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedInIcon className="icon" />
					</a>
					<a
						href="https://github.com/satyendra13/"
						target="_blank"
						rel="noreferrer"
					>
						<GitHubIcon className="icon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
