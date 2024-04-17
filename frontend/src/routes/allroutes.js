import { createBrowserRouter } from 'react-router-dom';
// PAGES
//import Homepagefunc from '../pages/homepage';
import LayoutComponent from '../pages/layout';
// COMPONENT
import BigtitlePart from '../components/bigtitle';
import CompositionComponent from '../components/compositions';
//import { titleName } from '../datas/datas';
//import ContactComponent from '../components/contact';
import ContactFormComponent from '../components/contactform';
import AboutmeComponent from '../components/aboutme';
import WorkComponent from '../components/workelem';
import CarrerComponent from '../components/carrerelem';
//import About from '../pages/about';
import HomepageComponent from '../components/hellocomp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent />,//its for the navbar and the logo
    children: [
  {
    index: true, 
    element: <HomepageComponent/>,
  },{
    path: 'aboutme',
    element: CompositionComponent ({Titlereplacement: BigtitlePart('ABOUTME'), Componentsreplacement:<AboutmeComponent/>}),//OK
},{
    path: '/carrer',
    element: CompositionComponent ({Titlereplacement:BigtitlePart('CARRER PATH') , Componentsreplacement:<CarrerComponent/>}),//OK
},{
    path: '/works',
    element: CompositionComponent ({Titlereplacement:BigtitlePart('MY WORKS'), Componentsreplacement:<WorkComponent/>}),//OK
},{
  path: '/contactme',
  element: CompositionComponent ({Titlereplacement:BigtitlePart('CONTACTS'), Componentsreplacement:<ContactFormComponent/>}),//OK
},
],
},
]);