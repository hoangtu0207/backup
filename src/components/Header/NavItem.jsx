import { Link } from "react-router-dom";

export default function NavItem(props) {
	return (
		<Link
			className="hover:text-gray-800"
			to={props.title}
		>
			{props.title}
		</Link>
	);
}
