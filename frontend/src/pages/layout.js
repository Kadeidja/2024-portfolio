import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/navbar';

function LayoutComponent(){
    return (
        <div className="App">
            <NavbarComponent />
            <Outlet />
        </div>
    );
}

export default LayoutComponent;