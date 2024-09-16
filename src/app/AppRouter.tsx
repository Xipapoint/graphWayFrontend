
import {Navigate, Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';

const AppRouter = () => {
    const {getItem} = useLocalStorage()
    const auth = getItem('auth')
    return (
        auth
            ?
            <Routes>
                {privateRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path} />))}
                <Route path="*"
                       element={<Navigate to='/home' replace/>}/>
                
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path} />))}
                <Route path="/"
                       element={<Navigate to='/home' replace/>}/>
                <Route path="*"
                       element={<Navigate to='/home' replace/>}/>
            </Routes>
    );
};

export default AppRouter;