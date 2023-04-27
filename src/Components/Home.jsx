import React from 'react'
import { vg1, vg2, vg3 } from '../Resources/image'
// import vg1 from "../Resources/vg1.PNG"
// import vg2 from "../Resources/vg2.PNG"
// import vg3 from "../Resources/vg3.PNG"


function Home() {
  return (
    <>
    <main>
        <h1>See value from social sooner</h1>
        <div className="para">
            <p>Our training and strategic service have helped</p>
            <p>thousands of organization succeed on social. </p>
            <p></p>
        </div>
        <button>Request a Demo</button>
    </main>
    <footer>
        <div className="card">
         <img src={vg1} alt="" />
         <h3>2,500</h3>
         <p>enterprise organization successfully lunched </p>
        </div>
        <div className="card">
         <img src={vg2} alt="" />
         <h3>45,000</h3>
         <p>enterprise users onboard seamlessly </p>
        </div>
        <div className="card">
         <img src={vg3} alt="" />
         <h3>200,00+</h3>
         <p>professional trained on product and strategy </p>
        </div>
    </footer>
    </>
  )
}

export default Home