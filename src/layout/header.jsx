import { Link } from "react-router-dom"
import "./main.css"
export const Header = () => {
    return <div className="header_block">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
    </div>
}