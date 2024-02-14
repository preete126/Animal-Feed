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

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleAnimalClick = (animalType) => {
    // Call an API endpoint to get nutritional information based on the selected animal
    fetch('/api/calculate_feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ animal_type: animalType }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nutritional Information:', data);
      // Do something with the nutritional information if needed
    })
    .catch(error => {
      console.error('Error fetching nutritional information:', error);
    });

    // Update the selected animal state
    setSelectedAnimal(animalType);
  };


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





  return (
    <>
      <Layout>
        <main className='frame1'>
          <div className='container'>
            <div className='welcomeMessage'>Welcome to Animal Feed</div>
            <div className='detail'>Your go-to resource for optimizing the nutrition of your farm animals.</div>
            <div>
              <button className='getStartedbtn' onClick={this.handleClick}>Get Started</button>
            </div>
          </div>
        </main>
        <main className='phase1'>
          <div className='selectTarget'>Select Target Animal</div>
          <section className='col-iteration'>
            {
              animalInfo.current.map((item, index) =>
                <div key={index}>
                  <div className='animalPhase'>
                    <img src={item.image} alt="" />
                    <button className='selectbtn'>{item.name}</button>
                  </div>
                </div>
              )
            }
          </section>
        </main>
        <main className='optionsbox'>
          <section style={{ lineHeight: "50px", width: "100%" }}>
            <div className='optiontext'>Feeding Purpose</div>
            <div>
              <button className='optionbtn'>
                <span>Select feeding purpose</span>
                <img src={arrowdown} alt="" />
              </button>
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
                <th>S/N</th>
                <th>Food</th>
                <th>Total Protein</th>
                <th>Total Energy</th>
                <th>Total Fiber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr style={{backgroundColor:"rgba(119, 201, 109, 0.5)"}}>
                <td>1</td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr style={{backgroundColor:"rgba(119, 201, 109, 0.5)"}}>
                <td>1</td>
                <td>Pasture</td>
                <td>0.57</td>
                <td>0.18</td>
                <td>0.36</td>
              </tr>
              <tr>
                <td>1</td>
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
          <button style={{backgroundColor:"#EC0B43"}} className='actionbtn'>Download Plan</button>
        </main>
      </Layout>
    </>
  )
}

export default App
