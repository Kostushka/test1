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
