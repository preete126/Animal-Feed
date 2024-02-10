import "../assets/style/App.css"
import logo from "../assets/images/2.png"
import { useState } from "react";


function Layout({ children }) {
    const [style, setStyle] = useState(true)

    const toggle = ()=>{
        setStyle(!style)
    }

    return (
        <>
            <nav className="navbar">
                <div className="webName">
                    <a href="#">
                        <img src={logo} width={"100%"} height={"100%"} alt="" />
                    </a>
                </div>
                <div className="toggle" onClick={toggle}>
                    <div className="icon-bar one"></div>
                    <div className="icon-bar two"></div>
                    <div className="icon-bar three"></div>
                </div>
                <ul className={`pages ${style?"close":"open"}`}>
                    <li>
                        <a href="#" style={{ color: "#0B5D1E", fontWeight: "500" }}>Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Foods</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
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