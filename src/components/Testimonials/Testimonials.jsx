import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
export default function Testimonials() {
    const slider=useRef();
    let tx=0;
    function slideForward() {
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    function slideBackward() {
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
      <img className='next-btn' onClick={slideForward} src={next_icon} alt="" />
      <img className='back-btn' onClick={slideBackward} src={back_icon} alt="" />
      <div className="slider">
      <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, earum molestiae animi, odit corporis fugiat eaque similique, repellendus deserunt officiis aut omnis perspiciatis veniam ducimus exercitationem? Sapiente saepe illo facere.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, earum molestiae animi, odit corporis fugiat eaque similique, repellendus deserunt officiis aut omnis perspiciatis veniam ducimus exercitationem? Sapiente saepe illo facere.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, earum molestiae animi, odit corporis fugiat eaque similique, repellendus deserunt officiis aut omnis perspiciatis veniam ducimus exercitationem? Sapiente saepe illo facere.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, earum molestiae animi, odit corporis fugiat eaque similique, repellendus deserunt officiis aut omnis perspiciatis veniam ducimus exercitationem? Sapiente saepe illo facere.</p>
            </div>
        </li>
    </ul>
    </div>
    </div>
  )
}
