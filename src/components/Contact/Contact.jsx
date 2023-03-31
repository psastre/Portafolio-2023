import React from 'react'
import "./Contact.scss"
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import {AiFillCodepenCircle} from 'react-icons/ai'


const Contact = () => {
  const copyMail =()=>{
    navigator.clipboard.writeText("pedro2000sastre@gmail.com");
    document.querySelector(".btn_copy_mail").textContent='Copied, I look forward to hearing from you ';
  }
  return (
    <div className="contact_container">
        <h3>Contact me</h3>
        <div className="contact_options_section">
            <div className="contact_option contact_left">
            <form action="https://formsubmit.co/pedro2000sastre@gmail.com" method="POST">
                <input type="email" name='email' placeholder='Your Email' className='input_form' required />
                <textarea name="message"  rows="7" placeholder='Your Message' className='textarea_form' required></textarea>

                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="https://pedro-sastre.web.app/#contact"></input>
                <button type='submit' className='btn-form'>Send Message</button>
            </form>
            <div className="social_media">
                <div className="linkedin"><a href="https://www.linkedin.com/in/pedro-sastre-64b72618b/" target="_blank"><BsLinkedin className='contact__option-icon'/></a></div>
                <div className="github"><a href="https://github.com/psastre" target="_blank"><BsGithub className='contact__option-icon'/></a></div>
                <div className="twitter"><a href="https://twitter.com/pedronason" target="_blank "><BsTwitter className='contact__option-icon'/></a></div>
                <div className="codepen"><a href="https://twitter.com/pedronason" target="_blank "><AiFillCodepenCircle className='contact__option-icon'/></a></div>
            </div>
            <button className='btn_copy_mail'  onClick={copyMail}>Copy my email</button>    
            </div>

            <div className="contact_option contact_right">
                
            </div>
        </div>
        
    </div>
  )
}

export default Contact