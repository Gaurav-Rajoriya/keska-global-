import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='form-section'>
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                        <ion-icon name="map"></ion-icon>
                            <div className="topic">Address</div>
                            <div className="text-one">X/293 D G/F Gali no 03. Raghubar pura no.01, Gandhi Nagar</div>
                            <div className="text-two">Delhi 110031</div>
                        </div>
                        <div className="phone details">
                        <ion-icon name="call"></ion-icon>
                            <div className="topic">Phone</div>
                            <div className="text-one">+91 9999999999</div>
                            <div className="text-two">+91 9999999999</div>
                            <div className="text-two">+91 9999999999</div>
                        </div>
                        <div className="email details">
                        <ion-icon name="mail"></ion-icon>
                            <div className="topic">Email</div>
                            <div className="text-one">demo123@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of quries related to Our Product, you can send me message from here. It's my pleasure to help you.</p>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder='Enter your message'/>
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
