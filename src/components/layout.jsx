import "../assets/style/App.css"
import logo from "../assets/images/2.png"


function Layout({children}) {
    return ( 
        <>
            <nav className="navbar">
                <div className="webName">
                    <a href="#">
                        <img src={logo} width={"100%"} height={"100%"} alt="" />
                    </a>
                </div>
                <ul className="pages">
                    <li>
                        <a href="#" style={{color:"#0B5D1E", fontWeight: "500"}}>Home</a>
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