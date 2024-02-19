import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/style/App.css"
import Layout from "../components/layout";


function Foods() {
    const [feedsHeader, setFeedsHeader] = useState([])
    let isMounted = true
    const [feeds, setFeeds] = useState([])
    let [loading, setLoading] = useState(true)
    let [errors, setErrors] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vREiifUG71NKLAKOXVHzQvpyBmBDbabJ3FdOBnJgeNWF1OYJ4yZNQyGQ2LLS9aAarVUawvOHoiY7vAt/pub?gid=1213098999&single=true&output=csv");
                const report = await response.data
                const data = report.split("\r\n")
                let index = 0
                for (const rows of data) {
                    let column = String(rows).split(",")
                    if (index == 0) {
                        feedsHeader.push(...column)
                        setFeedsHeader(prev => [...prev])
                    } else {
                        feeds.push(column)
                        setFeeds(prev => [...prev])
                    }

                    index++

                }

            } catch (error) {
                loading = false
                setLoading(loading)
                errors = true
                setErrors(errors)
            } finally {
                loading = false
                setLoading(loading)
            }
        }
        if (isMounted) fetchData()
        return () => {
            isMounted = false
        }
    }, [])



    return (
        <>
            <Layout>
                <main className='frame1'>
                    <div className='container'>
                        <div className='welcomeMessage'>Daily Feed for Farm Animals</div>
                        <div className='detail'>Feed, food grown or developed for livestock, poultry and some farm animals.</div>
                        <div>
                            <button className='getStartedbtn'>
                                <a href="#target" style={{ color: "white" }}>Get Started</a>
                            </button>
                        </div>
                    </div>
                </main>
                <div className="phase1">
                    <div className='selectTarget' id="target">Composition and valuation of feeds</div>
                </div>
                {
                    loading && feedsHeader.length == 0 ?
                        <div className="phase1" style={{ fontSize: "18px", textAlign: "center" }}>LOADING!!!</div>

                        : !loading && feedsHeader.length >= 1 ?
                            <main className='tableContainer scrollX'>
                                <div style={{ lineHeight: "40px" }}>Note: The "0" under a particular animal indicates the feed doesn't belong to the animal while "1" indicates the animal's kind of feed</div>
                                <table className='detailsTable'>

                                    <thead>
                                        <tr>
                                            {
                                                feedsHeader.map((value, index) =>
                                                    <th key={"header"} style={{ border: "1px solid #CDCDCD" }}>{value}</th>
                                                )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            feeds.map(value =>
                                                <tr key={value}>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[0]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[1]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[2]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[3]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[4]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[5]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[6]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[7]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[8]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[9]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[10]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[11]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[12]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[13]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[14]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[15]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[16]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[17]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[18]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[19]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[20]}</td>
                                                    <td style={{ border: "1px solid #CDCDCD" }}>{value[21]}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </main>
                            :
                            !loading && errors &&
                            <div className="phase1" style={{ fontSize: "18px", textAlign: "center" }}>
                                Network Error! check your internet connection and try again
                            </div>
                }
            </Layout>
        </>
    );
}




export default Foods;