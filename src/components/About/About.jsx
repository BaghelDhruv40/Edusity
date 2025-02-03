import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
export default function About() {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img className='about-img' src={about_img} alt="" />
        <img className='play-icon' src={play_icon} alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae blanditiis laboriosam cumque animi quaerat eius aelit eum!</p>
        <p>Lorem ipsum dolor sit amet consectetur, s cum officiis recusandae earum, tempora, labore nihil rerum repellat quae quod velit eum!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae blanditiis lra, labore nihil rerum repellat quae quod velit eum!</p>
        
      </div>
    </div>
  )
}
