import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { routerConfig } from './routes/routesConfig';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {routerConfig.map((el, i) => (
                    <Route key={i} path={el.path} element={el.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
