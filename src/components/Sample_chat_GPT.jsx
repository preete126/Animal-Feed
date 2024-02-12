import { useState, useEffect } from 'react';
import Layout from './layout';
import axios from 'axios'; // Import Axios
import "../assets/style/App.css";
import { useRef } from 'react';
import arrowdown from "../assets/images/arrow-drop-down-line.png";
import Rectangle1 from "../assets/images/Rectangle 1.png";
import Rectangle10 from "../assets/images/Rectangle 10.png";
import Rectangle11 from "../assets/images/Rectangle 11.png";
import Rectangle12 from "../assets/images/Rectangle 12.png";
import Rectangle13 from "../assets/images/Rectangle 13.png";
import Rectangle20 from "../assets/images/Rectangle 20.png";
import Rectangle21 from "../assets/images/Rectangle 21.png";

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [totalProtein, setTotalProtein] = useState('Daily');
  const [totalEnergy, setTotalEnergy] = useState('Daily');
  const [totalFiber, setTotalFiber] = useState('Daily');

  const handleAnimalClick = (animalType) => {
    // Use Axios for API request
    axios.post('/api/calculate_feed', { animal_type: animalType })
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

    // Update the selected animal state
    setSelectedAnimal(animalType);
  };

  const animalInfo = useRef(
    [
      { name: "Cow", image: Rectangle1, purpose: ["Newborn", "Growing", "Producing", "Meat Production", "Maintenace"] },
      { name: "Sheep", image: Rectangle13, purpose: ["Newborn", "Growing", "Producing", "Meat Production"] },
      { name: "Rabbit", image: Rectangle20, purpose: ["Newborn", "Growing", "Meat Production"] },
      { name: "Goat", image: Rectangle11, purpose: ["Newborn", "Growing", "Producing", "Meat Production"] },
      { name: "Fish", image: Rectangle12, purpose: ["Newborn", "Growing", "Meat Production"] },
      { name: "Poultry", image: Rectangle10, purpose: ["Newborn", "Growing", "Producing", "Meat Production"] },
      { name: "Horse", image: Rectangle21, purpose: ["Newborn", "Growing", "Meat Production", "Maintenace"] },
      { name: "Horse", image: Rectangle21, purpose: ["Newborn", "Growing","Meat Production", "Maintenace"] },
    ]
  );

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
                    <button onClick={() => handleAnimalClick(item.name)} className='selectbtn'>{item.name}</button>
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
              {/* ... existing code ... */}
            </div>
          </section>
          <section style={{ lineHeight: "50px", width: "100%" }}>
            <div className='optiontext'>Animal Age</div>
            <div>
              <button className='optionbtn'>
                <span>Select animal age</span>
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
                <td>{totalProtein}</td>
                <td>{totalEnergy}</td>
                <td>{totalFiber}</td>
              </tr>
            </tbody>
          </table>
        </main>

        {/* ... other sections ... */}
      </Layout>
    </>
  );
}

export default App;
}
