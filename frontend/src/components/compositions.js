//OKKKKK
import allstyles from '../styles/allstyles.css'
//Ici c'est un component qui encapsule des sous composants graces au parametres dans la fonction elle permet de composer les deux partie de la page selon ses gouts
function CompositionComponent ({Titlereplacement,Componentsreplacement}){
    return(
        <>
        <section className='bigsectionClass'>
        <section className="titlepartClass">
            {Titlereplacement}
        </section>
        <section className="sidepartClass">
            {Componentsreplacement}
        </section>
        </section>
        </>
    )
}

export default CompositionComponent;