//OK
import { workelemData } from "../datas/datas";
function WorkComponent (){
    return(
        workelemData.map((work)=>{
            return(
                <div key={work.workelemid} className="subpartClass">
                    <h3 className="subtitleClass">{work.workelemtitle}</h3>
                    <div>
                { work.workelemtext.map((subwork)=>{
                    return(
                        <p key={subwork.wrktxtid}>{subwork.wrktxt}</p>
                    )
                 } )}
                 {work.workelemimgsrc.map((subimg)=>{
                    return(
                        <img src={subimg.wrkimgsrc} alt={subimg.wrktxt} className="subimgClass"/>
                    )
                 })}
                    </div>  
                </div>
            );
        })
    )
       
}

export default WorkComponent;