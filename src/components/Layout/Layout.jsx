import { Outlet } from 'react-router-dom';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

const Layout = () => {
    return (
        <>
            <Header />
            <RandomPlanet />
            <Outlet />
        </>
    );
};

export default Layout;
