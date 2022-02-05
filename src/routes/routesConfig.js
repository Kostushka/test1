import CurrencyPage from '../components/CurrencyPage';
import ConverterPage from '../components/ConverterPage';

export const routerConfig = [
    { path: '/', element: <ConverterPage /> },
    { path: 'currency', element: <CurrencyPage /> },
    { path: '*', element: <ConverterPage /> },
];
