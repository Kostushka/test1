import { useEffect, useState } from 'react';
import { getApiData } from '../../utils/network';
import styles from './ConverterPage.module.css';

const ConverterPage = () => {
    const [inputValue, setInputValue] = useState('');

    const el = inputValue.split(' ').map((el) => {
        return el.toUpperCase();
    });

    useEffect(() => {
        getApiData(el);
    }, [el]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='10 usd in rub'
            />
            <button>Получить результат</button>
        </>
    );
};

export default ConverterPage;
