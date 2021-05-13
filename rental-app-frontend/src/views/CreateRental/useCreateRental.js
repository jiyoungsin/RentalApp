import axios from 'axios';

const sendDetailsToServer = (state) => {
    axios.post('/createRental', state, { 
        headers: {
            'Content-Type' : 'application/json',
        }
    }).then(res => {
        if(res.status === 200) console.log("Saving data to Backend");
        console.log("Error while creating Rental Status: ", res.status);
    }).catch(err => {
        console.error(err);
        alert('Error Sending Data to Backend ');
    });
}

export default sendDetailsToServer;