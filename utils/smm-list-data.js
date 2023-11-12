const { fetch } = require('undici');

module.exports.getData = async function getData() {
    const url = process.env.SMM_URL;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } 
    catch (err) {
        console.log(err);
        throw err;
    }
}