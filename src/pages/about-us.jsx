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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam dignissimos quibusdam magnam. Quis neque non autem voluptatem, mollitia iure. Suscipit aliquam dolores, quam sint voluptates numquam asperiores architecto reprehenderit cupiditate!</p>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div className="div2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div className="div2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div className="div2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="aim">
                            <div className="div1">&#10148;</div>
                            <div className="div2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </section>
                    <section className="oval">

                    </section>
                </main>
            </Layout>
        </>
    );
}

export default AboutUs;