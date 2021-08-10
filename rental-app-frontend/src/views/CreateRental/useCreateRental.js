import axios from 'axios';

// modulating axios call.
// index was too crowded.
const sendDetailsToServer = (state) => {
    axios
        .post('http://www.aidatastructures.com:5000/rentals/createRental', state, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            if (res.status === 200) {
                console.log('Saving data to Backend');
            } else {
                console.log('Error while creating Rental Status: ', res.status);
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Error Sending Data to Backend ');
        });
};

export default sendDetailsToServer;
