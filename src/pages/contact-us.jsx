import Layout from "../components/layout";
import "../assets/style/App.css"
import { Link } from "react-router-dom";
import email from "../assets/images/messages.png"
import contact from "../assets/images/phone.png"
import address from "../assets/images/address.png"

function ContactUs() {
    return (
        <>
            <Layout>
                <main className="frame2">
                    <div style={{ lineHeight: "60px", textAlign: "center" }}>
                        <div className="detail">CONTACT US</div>
                        <button className="contactbtn">
                            <Link to={"/"} style={{ color: "white" }}>Home</Link>
                            <span> &gt; Contact Us</span>
                        </button>
                    </div>
                </main>
                <main className="phase2">
                    <section className="contacts">
                        <div className="shape">
                            <img src={email} width={"32px"} alt="" />
                        </div>
                        <div className="methods">Email</div>
                        <span>gdscalhikmahuni@gmail.com</span>
                    </section>
                    <section className="contacts">
                        <div className="shape">
                            <img src={contact} width={"32px"} alt="" />
                        </div>
                        <div className="methods">Contact</div>
                        <span>(+234) 9161722719</span>
                    </section>
                    <section className="contacts">
                        <div className="shape">
                            <img src={address} width={"32px"} alt="" />
                        </div>
                        <div className="methods">Address</div>
                        <span>Al-hikmah University,Ilorin, Nigeria</span>
                    </section>
                </main>
            </Layout>
        </>
    );
}

export default ContactUs;