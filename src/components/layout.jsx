import "../assets/style/App.css"
import logo from "../assets/images/2.png"
import { useState } from "react";
import { Link } from "react-router-dom";


function Layout({ children }) {
    const [style, setStyle] = useState(true)

    const toggle = ()=>{
        setStyle(!style)
    }

    return (
        <>
            <nav className="navbar">
                <div className="webName">
                    <Link to={"/"}>
                        <img src={logo} width={"100%"} height={"100%"} alt="" />
                    </Link>
                </div>
                <div className="toggle" onClick={toggle}>
                    <div className="icon-bar one"></div>
                    <div className="icon-bar two"></div>
                    <div className="icon-bar three"></div>
                </div>
                <ul className={`pages ${style?"close":"open"}`}>
                    <li>
                        <Link to={"/"} style={{ color: "#0B5D1E", fontWeight: "500" }}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/foods"}>Foods</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>
            </nav>

            {children}

            <footer>
                <small>© Animal Feed, 2024. All right reserved.</small>
            </footer>
        </>
    );
}

export default Layout;