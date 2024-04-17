//OK

import { aboutmeData } from "../datas/datas";
function AboutmeComponent (){
    return(
         aboutmeData.map((about)=>{
            return(
                <div key={about.aboutmeid} className="subpartClass">
                    <h3 className="subtitleClass">{about.aboutmetitle}</h3>
                    <img src={about.aboutmeimgsrc} alt="" className="subimgClass"/>
                    <p>{about.aboutmetext}</p>
                </div>
            );
        })
    )
       
}

export default AboutmeComponent;