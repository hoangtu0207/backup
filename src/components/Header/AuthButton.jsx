import { Link } from "react-router-dom";

export default function AuthButton(props) {
	return (
		<Link
			to={props.title}
			className="btn btn-sm btn-neutral"
		>
			{props.title}
		</Link>
	);
}
