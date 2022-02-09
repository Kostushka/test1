import axios from 'axios';

export const getApiData = async () => {
    try {
        const res = await axios.get(
            `http://data.fixer.io/api/latest?access_key=5cc8c14976cbf1d1cccb10076a93d127`
        );
        return res.data.rates;
    } catch (error) {
        console.error('Could not fetch', error.message);
        return false;
    }
};

export const getCurrencyForConvert = async (from = 'RUB', to = 'USD') => {
    try {
        const res = await axios.get(
            `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=cde21f3f97657a4338ed`
        );
        return res.data;
    } catch (error) {
        console.error('Could not fetch', error.message);
        return false;
    }
};
