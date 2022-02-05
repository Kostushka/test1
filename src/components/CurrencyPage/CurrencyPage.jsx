import { useEffect, useState } from 'react';
import { getApiData } from '../../utils/network';
import styles from './CurrencyPage.module.css';

const CurrencyPage = () => {
    const [currency, setCurrency] = useState([]);

    const getData = async () => {
        const res = await getApiData();
        setCurrency(Object.keys(res));
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h1>Currency</h1>
            <ul className={styles.container}>
                {currency.map((el, i) => (
                    <li key={i} className={styles.list}>
                        {el}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CurrencyPage;
