import Layout from "../components/layout";
import "../assets/style/App.css"
import { Link } from "react-router-dom";
// import email from "../assets/images/messages.png"
// import contact from "../assets/images/phone.png"
// import address from "../assets/images/address.png"

function AboutUs() {
    return (
        <>
            <Layout>
                <main className="frame2">
                    <div style={{ lineHeight: "60px", textAlign: "center" }}>
                        <div className="detail">ABOUT US</div>
                        <button className="contactbtn">
                            <Link to={"/"} style={{ color: "white" }}>Home</Link>
                            <span> &gt; About Us</span>
                        </button>
                    </div>
                </main>
                <main className="phase3">
                    <section className="aboutus">
                        <div style={{ lineHeight: "20px" }}>
                            <div className='aboutWelcome'>Welcome to Animal Feed</div>
                            <p className="underline"></p>
                        </div>
                        <p>We are a driven ensemble of four individuals who united during Google's Solution Challenge event, bound by a common mission. Under the leadership of Lawal Abdulmalik as our project manager, each team member plays a pivotal role in our success.</p>

                    </section>
                    <section className="oval">

                    </section>
                </main>
                <main className="phase1">
                    <p style={{fontSize:"20px"}}><b>Meet the talented minds shaping our projects:</b></p>

                    <section className="team">
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div style={{ lineHeight: "30px" }}>
                                <div className="div2">Lawal Abdulmalik (Project Manager and Data Analyst): The strategic architect of our endeavours, navigating us toward success.</div>
                                <div style={{marginTop:"20px"}}>
                                    <div>LinkedIn:</div>
                                    <div className="continue"><a href="https://www.linkedin.com/in/abdulmalik-lawal-01487b225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/abdulmalik-lawal-01487b225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a></div>
                                </div>
                                <div>
                                    <div>X:</div>
                                    <div className="continue"><a href="https://x.com/OlatundeLawal12?t=nqUNdccbzQssM0JbwL9qqg&s=09">https://x.com/OlatundeLawal12?t=nqUNdccbzQssM0JbwL9qqg&s=09</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div style={{ lineHeight: "30px" }}>
                                <div className="div2">Mubarokah Ismail (Frontend Developer): A creative force, crafting intuitive and engaging user experiences.</div>
                                <div style={{marginTop:"20px"}}>
                                    <div>LinkedIn:</div>
                                    <div className="continue"><a href="https://linkedin.com/in/ismail-mubarokah-461410234">https://linkedin.com/in/ismail-mubarokah-461410234</a></div>
                                </div>
                                <div>
                                    <div>X:</div>
                                    <div className="continue"><a href="https://twitter.com/BarakatIsmail9?t=83G4VrrATVq8ijFXBd4L0Q&s=09">https://twitter.com/BarakatIsmail9?t=83G4VrrATVq8ijFXBd4L0Q&s=09</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div style={{ lineHeight: "30px" }}>
                                <div className="div2">Muhammad Baba-Ahmad (Backend Designer and Data Analyst): The technical backbone, ensuring robust and scalable systems.</div>
                                <div style={{marginTop:"20px"}}>
                                    <div>X:</div>
                                    <div className="continue"><a href="https://x.com/ABaba93586?t=ehGuZJBOYDze0i-jEfs24A&s=09">https://x.com/ABaba93586?t=ehGuZJBOYDze0i-jEfs24A&s=09</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div style={{ lineHeight: "30px" }}>
                                <div className="div2">Adeleke Mariam (UI/UX Designer): Infusing our projects with a seamless and visually captivating user interface.</div>
                                <div style={{marginTop:"20px"}}>
                                    <div>LinkedIn:</div>
                                    <div className="continue"><a href="https://www.linkedin.com/in/adeleke-maryam-04b9a3251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/adeleke-maryam-04b9a3251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</a></div>
                                </div>
                                <div>
                                    <div>X:</div>
                                    <div className="continue"><a href="https://x.com/maryam_UxUi?t=084-p9wLwDfZw69gk2SswQ&s=09">https://x.com/maryam_UxUi?t=084-p9wLwDfZw69gk2SswQ&s=09</a></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <p style={{lineHeight:"35px", marginTop:"30px"}}>Our commitment extends beyond the ordinary, fueled by passion and a shared dedication to excellence. With your support, we push boundaries, redefining what's possible. Join us on this exciting journey of shaping the future!</p>
                </main>
            </Layout>
        </>
    );
}

export default AboutUs;