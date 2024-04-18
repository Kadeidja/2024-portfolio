//OK
//import { workelemData } from "../datas/datas";
import React, { Fragment, useEffect, useState } from 'react';//pour le lien entre le front et le back

function WorkComponent (){
    const [dataWorks, setDataWork] = useState('');

    useEffect(() => {
      fetch('/work')
        .then(res => {
          console.log(dataWorks);
          return res.json()
          
        })
        .then(dataWorks => {
           setDataWork(dataWorks);
         })
    }, []);
    return(
        <Fragment>
            {dataWorks ? dataWorks.map(work =>
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
        
        ) : 'Loading...'}
        </Fragment>
        
    )
   
    
    /*
    
    {dataWorks ? dataWorks.map(work => <div>{work.worktitle}</div>) : 'Loading...'}


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
    
    */
}

export default WorkComponent;