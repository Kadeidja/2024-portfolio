//OK
import logo from '../assets/img/logo.svg';
import { contactImg } from "../datas/datas";
const contactimgelem = contactImg;
function ContactFormComponent(){
    return(
        <div id='contactDivPart'>
        <div id="contactInfoPart">
        <div id="subpartInfo">
            <h1>MY SOCIALS</h1>
        </div>
        <div id="subpartSocials">
            {
                contactimgelem.map((contactelem)=>{
                    return(
                        <div className="soloSocials" key={contactelem.contactimgid}>
                            
                            <a href="/"><img src={logo} alt={contactelem.contactimgalt} className="subpartImgSocial" /></a>
                        </div>
                        
                    )
                }
                )
            }
        </div>

        </div>
        <div id="contactFormPart">
            <form id="contactFormId">
                <label for='contactemailId'>Contact</label>
                <input type='text' name='contact' id='contactemailId'/>

                <label for='contactnameId'>Name</label>
                <input type='text' name='name' id='contactnameId'/>

                <label for='contactsubjectId'>Subject</label>
                <input type='text' name='subject' id='contactsubjectId'/>

                <label for='contactmessageId'>Message : </label>
                <textarea name='message' id='contactmessageId' placeholder='Message me here'></textarea>

            </form>
        </div>
        </div>
        

    )
}
export default ContactFormComponent;