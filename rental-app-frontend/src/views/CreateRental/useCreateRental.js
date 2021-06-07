import axios from 'axios';

// modulating axios call.
// index was too crowded.
const sendDetailsToServer = (state) => {
    const payload = {...state}
    axios.post('http://localhost:5000/rentals/createRental', payload, { 
        headers: {
            'Content-Type' : 'application/json',
        }
    }).then(res => {
        if(res.status === 200){
            console.log("Saving data to Backend");
        }else{
            console.log("Error while creating Rental Status: ", res.status);
        }
    }).catch(err => {
        console.error(err);
        alert('Error Sending Data to Backend ');
    });
}

export default sendDetailsToServer;