import React from 'react'
import './Home.css'

import Heroimg from '../assets/images/Hero-img.jpg'
import Button from '../Components/UI/Button'

function Home() {
  return (
    <div>
      <>
        <div className="container">
            

            <div className="hero-section">
                <div className="image">
                    <img className="heroImage" src={Heroimg} alt="girl with glasses" />
                </div>

                <div className="text-hero">
                    <h1 className='heroTopic'>Get the best version of your eyes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis fuga ex facere, quos quaerat tenetur repudiandae sint, natus, aliquam error voluptatum incidunt? Sunt alias quos, reiciendis velit molestiae fugit? Ea, alias. Laboriosam, exercitationem iure incidunt optio ullam illo corrupti, vitae quos expedita facere sit laudantium? Maiores deleniti eveniet doloribus.</p>
                    <Button/>
                </div>


            </div>
        </div>
      </>

    </div>
  )
}

export default Home
