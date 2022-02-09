import { useEffect, useState, useRef } from 'react';
import { getCurrencyForConvert } from '../../utils/network';
import styles from './ConverterPage.module.css';

const ConverterPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [currency, setCurrency] = useState(null);

    // const ref = useRef(null);
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            const { value } = e.target;
            const [count, from, i, to] = value.split(' ');
            const res = await getCurrencyForConvert(from, to);
            setCurrency(res[Object.keys(res)] * count);
        }
    };
    const handleChange = async () => {
        const [count, from, i, to] = inputValue.split(' ');
        const res = await getCurrencyForConvert(from, to);
        setCurrency(res[Object.keys(res)] * count);
    };

    // const handleChange = async (ref) => {
    //     const { value } = ref.current;
    //     const [count, from, i, to] = value.split(' ');
    //     const res = await getCurrencyForConvert(from, to);
    //     setCurrency(res[Object.keys(res)] * count);
    // };

    return (
        <>
            <input
                type='text'
                value={inputValue}
                // ref={ref}
                onChange={handleChangeInput}
                onKeyDown={handleKeyDown}
                placeholder='10 usd in rub'
            />
            {/* <button onClick={() => handleChange(ref)}>
                Получить результат
            </button> */}
            <button onClick={handleChange}>Получить результат</button>
            {currency && <div>{currency.toFixed(4)}</div>}
        </>
    );
};

export default ConverterPage;
