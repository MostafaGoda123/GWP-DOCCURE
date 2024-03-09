import React from 'react'
import './contact.css'
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json'
import contactAnimation from '../../animation/contactAnimation.json'

import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mayrbjgn");

  return (
    <section className="contact">
      <h1>
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p>Contact us for more information and get notified when I publish something new.</p>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="inp">
            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="email" />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="inp">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button type='submit' disabled={state.submitting}>{state.submitting ? "submitting..." : "Submit"}</button>
          { state.succeeded && 
          <div className='succeededMessage'>
            <Lottie loop="false" animationData={doneAnimation} className='lottie' />
            Your Message has been sent.
          </div> }
        </form>
        <div className="animation"><Lottie animationData={contactAnimation} className='contactAnimation' /></div>
      </main>
    </section>
  )
}

export default Contact