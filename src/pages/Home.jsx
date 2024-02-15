import { useState } from 'react'
import Layout from '../components/layout'
import "../assets/style/App.css"
import { useRef } from 'react'
import axios from 'axios'
import arrowdown from "../assets/images/arrow-drop-down-line.png"
import Rectangle1 from "../assets/images/Rectangle 1.png"
import Rectangle10 from "../assets/images/Rectangle 10.png"
import Rectangle11 from "../assets/images/Rectangle 11.png"
import Rectangle12 from "../assets/images/Rectangle 12.png"
import Rectangle13 from "../assets/images/Rectangle 13.png"
import Rectangle20 from "../assets/images/Rectangle 20.png"
import Rectangle21 from "../assets/images/Rectangle 21.png"
function App() {


  const [totalProtein, setTotalProtein] = useState('Daily');
  const [totalEnergy, setTotalEnergy] = useState('Daily');
  const [totalFiber, setTotalFiber] = useState('Daily');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
/*
  const handleAnimalClick = (item) => {
    // Update state with purpose
    setActions({ ...actions, purpose: item });
  
    // Prepare data for POST request
    const data = {
      animal_type: selectedAnimal,
      purpose: item,
    };
  
    // Use Axios with Content-Type header
    axios.post('http://127.0.0.1:5000/api/calculate_feed', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const data = response.data;
        console.log('Nutritional Information:', data);
  
        // Handle valid response:
        const nutritionalInfo = {
          totalProtein: data.totalProtein || 'Daily',
          totalEnergy: data.totalEnergy || 'Daily',
          totalFiber: data.totalFiber || 'Daily',
        };
  
        // Update state with structured nutritional information
        setTotalProtein(nutritionalInfo.totalProtein);
        setTotalEnergy(nutritionalInfo.totalEnergy);
        setTotalFiber(nutritionalInfo.totalFiber);
      })
      .catch((error) => {
        // Handle errors more specifically:
        if (error.response) {
          // Server-side error with status code
          console.error(
            `Error fetching nutritional information (status ${error.response.status}):`
          );
          // Handle specific error codes (e.g., 400 for invalid data, 404 for unknown animal)
        } else if (error.request) {
          // Network error
          console.error('Error connecting to server:', error.request);
        } else {
          // Other errors
          console.error('Error fetching nutritional information:', error);
        }
  
        // Provide user feedback or take appropriate actions based on the error
      });
  };
*/

  const handleAnimalClick = (item) => {
     // Use Axios for API request
    setActions({ ...actions, purpose: item })
    axios.post('http://127.0.0.1:5000/api/calculate_feed', { animal_type: selectedAnimal, purpose:item })
      .then(response => {
        const data = response.data;
        console.log('Nutritional Information:', data);

        // Update the state with the received nutritional information
        setTotalProtein(data.totalProtein || 'Daily');
        setTotalEnergy(data.totalEnergy || 'Daily');
        setTotalFiber(data.totalFiber || 'Daily');
      })
      .catch(error => {
        console.error('Error fetching nutritional information:', error);
      });

    
  };


  const animalInfo = useRef(
    [
      {
        name: "Cattle", image: Rectangle1, purpose: ["Newborn", "Growing", "Producing", "Meat Production", "Maintenance"]
      },
      {
        name: "Sheep", image: Rectangle13, purpose: ["Newborn", "Growing", "Producing", "Meat Production"]
      },
      {
        name: "Rabbit", image: Rectangle20, purpose: ["Newborn", "Growing", "Meat Production"]
      },
      {
        name: "Goat", image: Rectangle11, purpose: ["Newborn", "Growing", "Producing", "Meat Production"]
      },
      {
        name: "Fish", image: Rectangle12, purpose: ["Newborn", "Growing", "Meat Production"]
      },
      {
        name: "Poultry", image: Rectangle10, purpose: ["Newborn", "Growing", "Producing", "Meat Production"]
      },
      {
        name: "Horse", image: Rectangle21, purpose: ["Newborn", "Growing", "Meat Production", "Maintenance"]
      },
    ]
  )
  const [isInputVisible, setIsInputVisible] = useState(Array(animalInfo.current.length).fill(false));
  const [purpose, setPurpose] = useState([])
  const [display, setDisplay] = useState({
    purpose:"none",
    age:"none"
  })
  const [actions, setActions] = useState({
    purpose: "Select feeding purpose",
    age: "Select animal age"
  })


  const dropdown = () => {
    const change = display.purpose == "none" ? "block" : "none"
    setDisplay({...display,purpose:change})
  }
  const dropdown2 = () => {
    const change = display.age == "none" ? "block" : "none"
    setDisplay({...display,age:change})
  }

  const checkedUpdate = (item, index) => {

    setIsInputVisible(prev => prev.map(() => false))
    setIsInputVisible(prev => prev.map((visible, i) => i === index ? true : visible))
    setPurpose(item.purpose)
    setSelectedAnimal(item.name);
    setActions({ ...actions, purpose: "Select feeding purpose" })
    // setDisplay("none")
  }





  return (
    <>
      <Layout>
        <main className='frame1'>
          <div className='container'>
            <div className='welcomeMessage'>Welcome to Animal Feed</div>
            <div className='detail'>Your go-to resource for optimizing the nutrition of your farm animals.</div>
            <div>
              <button className='getStartedbtn'>
                <a href="#target" style={{color:"white"}}>Get Started</a>
              </button>
            </div>
          </div>
        </main>
        <div className='greenBg'></div>
        <main className='phase1' id='target'>
          <div className='selectTarget'>Select Target Animal<span style={{ color: "red" }}>*</span></div>
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

              <div style={{ display: display.purpose }} className='dropdownItem'>
                {
                  purpose.length !== 0 ? purpose.map((item, index) =>
                    <button key={index} onClick={() => handleAnimalClick(item)} className='dropdownbtn'>{item}</button>
                  )
                    :
                    <div style={{ textAlign: "center", fontSize: "20px" }}>No animal picked yet!</div>
                }
              </div>



            </div>
          </section>
          <section style={{ lineHeight: "50px", width: "100%" }}>
            <div className='optiontext'>Animal Age<span style={{ color: "red" }}>*</span></div>
            <div style={{ position: "relative" }}>
              <button onClick={dropdown2} className='optionbtn'>
                <span>{actions.age}</span>
                <img src={arrowdown} alt="" />
              </button>
              <div style={{ display: display.age}} className='dropdownItem'>
                {
                  // purpose.length !== 0 ? purpose.map((item, index) =>
                  //   <button key={index} onClick={() => setActions({ ...actions, purpose: item })} className='dropdownbtn'>{item}</button>
                  // )
                  //   :
                    <div style={{ textAlign: "center", fontSize: "20px", lineHeight:"30px" }}>No content available <br />comming soon!</div>
                }
              </div>
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
                <td>{totalProtein}</td>
                <td>{totalEnergy}</td>
                <td>{totalFiber}</td>
              </tr>
            </tbody>
          </table>
        </main>

        <main className='alternative'>
          <section className='altcontainer'>
            <div className='optiontext' style={{width:"100%"}}>Total Protein :</div>
            <button className='altContent'>
              Daily
            </button>
          </section>
          <section className='altcontainer'>
            <div className='optiontext' style={{width:"100%"}}>Total Energy :</div>
            <button className='altContent'>
              Daily
            </button>
          </section>
          <section className='altcontainer'>
            <div className='optiontext' style={{width:"100%"}}>Total Fiber :</div>
            <button className='altContent'>
             Daily
            </button>
          </section>
        </main>

        <main className='tableContainer scroll'>
          <table className='detailsTable'>
            <thead>
              <tr>
                <th>Select<span style={{ color: "red" }}>*</span></th>
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

export default Home
