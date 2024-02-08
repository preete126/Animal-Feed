import { useState } from 'react'
import Layout from '../components/layout'
import "../assets/style/App.css"
import { useRef } from 'react'
import arrowdown from "../assets/images/arrow-drop-down-line.png"
import Rectangle1 from "../assets/images/Rectangle 1.png"
import Rectangle10 from "../assets/images/Rectangle 10.png"
import Rectangle11 from "../assets/images/Rectangle 11.png"
import Rectangle12 from "../assets/images/Rectangle 12.png"
import Rectangle13 from "../assets/images/Rectangle 13.png"
import Rectangle20 from "../assets/images/Rectangle 20.png"
import Rectangle21 from "../assets/images/Rectangle 21.png"
function App() {
  const animalInfo = useRef(
    [
      {
        name: "Cow", image: Rectangle1, purpose: ["Work", "Dairy", "Food"]
      },
      {
        name: "Sheep", image: Rectangle13, purpose: ["Dairy", "Food"]
      },
      {
        name: "Rabbit", image: Rectangle20, purpose: ["Dairy", "Food"]
      },
      {
        name: "Goat", image: Rectangle11, purpose: ["Dairy", "Food"]
      },
      {
        name: "Fish", image: Rectangle12, purpose: ["Dairy", "Food"]
      },
      {
        name: "Poultry", image: Rectangle10, purpose: ["Dairy", "Food"]
      },
      {
        name: "Horse", image: Rectangle21, purpose: ["Work", "Dairy", "Food"]
      },
      {
        name: "Horse", image: Rectangle21, purpose: ["Work", "Dairy", "Food"]
      }
    ]
  )
  const [isInputVisible, setIsInputVisible] = useState(Array(animalInfo.current.length).fill(false));
  const [purpose, setPurpose] = useState([])
  const [display, setDisplay] = useState("none")
  const [actions, setActions] = useState({
    purpose: "Select feeding purpose",
    age: "Select animal age"
  })


  const dropdown = () => {
    const change = display == "none" ? "block" : "none"
    setDisplay(change)
    console.log(display);
  }

  const checkedUpdate = (item, index) => {

    setIsInputVisible(prev => prev.map(() => false))
    setIsInputVisible(prev => prev.map((visible, i) => i === index ? true : visible))
    setPurpose(item.purpose)
    setActions({ ...actions, purpose: "Select feeding purpose" })
    setDisplay("none")
  }





  return (
    <>
      <Layout>
        <main className='frame1'>
          <div className='container'>
            <div className='welcomeMessage'>Welcome to Animal Feed</div>
            <div className='detail'>Your go-to resource for optimizing the nutrition of your farm animals.</div>
            <div>
              <button className='getStartedbtn'>Get Started</button>
            </div>
          </div>
        </main>
        <div className='greenBg'></div>
        <main className='phase1'>
          <div className='selectTarget'>Select Target Animal</div>
          <section className='col-iteration'>
            {
              animalInfo.current.map((item, index) =>
                <div key={index}>
                  <div className='animalPhase' style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                    <img src={item.image} alt="" />
                    <button onClick={() => checkedUpdate(item, index)} className='selectbtn'>{item.name}</button>
                    {
                      isInputVisible[index] && <input checked onChange={() => ("")} className='animalcheck' name='animal' type="checkbox" />
                    }
                  </div>
                </div>
              )
            }
          </section>
        </main>
        <main className='optionsbox'>
          <section style={{ lineHeight: "50px", width: "100%" }}>
            <div className='optiontext'>Feeding Purpose<span style={{ color: "red" }}>*</span></div>
            <div style={{ position: "relative" }}>
              <button onClick={dropdown} className='optionbtn'>
                <span>{actions.purpose}</span>
                <img src={arrowdown} alt="" />
              </button>

              <div style={{ display: display }} className='dropdownItem'>
                {
                  purpose.length !== 0 ? purpose.map((item, index) =>
                    <button key={index} onClick={() => setActions({ ...actions, purpose: item })} className='dropdownbtn'>{item}</button>
                  )
                    :
                    <div style={{ textAlign: "center", fontSize: "20px" }}>No animal picked yet!</div>
                }
              </div>



            </div>
          </section>
          <section style={{ lineHeight: "50px", width: "100%" }}>
            <div className='optiontext'>Animal Age</div>
            <div>
              <button className='optionbtn'>
                <span>{actions.age}</span>
                <img src={arrowdown} alt="" />
              </button>
            </div>
          </section>
        </main>
        <main className='tableContainer'>
          <table className='infoTable'>
            <thead>
              <tr>
                <th>Total Protein</th>
                <th>Total Energy</th>
                <th>Total Fiber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily</td>
                <td>Daily</td>
                <td>Daily</td>
              </tr>
            </tbody>
          </table>
        </main>
        <main className='tableContainer scroll'>
          <table className='detailsTable'>
            <thead>
              <tr>
                <th>options</th>
                <th>Food</th>
                <th>Total Protein</th>
                <th>Total Energy</th>
                <th>Total Fiber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="feedsOption" />
                </td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr style={{ backgroundColor: "rgba(119, 201, 109, 0.5)" }}>
                <td>
                  <input type="checkbox" name="" id="feedsOption" />
                </td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="feedsOption" />
                </td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr style={{ backgroundColor: "rgba(119, 201, 109, 0.5)" }}>
                <td>
                  <input type="checkbox" name="" id="feedsOption" />
                </td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="feedsOption" />
                </td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
            </tbody>
          </table>
        </main>
        <main className='actionContainer'>
          <button className='actionbtn'>Preview Plan</button>
          <button style={{ backgroundColor: "#EC0B43" }} className='actionbtn'>Download Plan</button>
        </main>
      </Layout>
    </>
  )
}

export default App
