const { fetch } = require('undici');

module.exports.deleteData = async function deleteData(id) {
    const url = `${process.env.SMM_URL}/${id}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
    } 
    catch (err) {
        console.log(err);
        throw err;
    }
}