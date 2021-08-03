import React from 'react'

export default function ReviewsPost({
    user,
    timeCreated,
    description,
}){
    let date = timeCreated;
    date.toString();
    date = date.substr(2, 8);
    let year = date.substr(0, 2);
    let month = date.substr(3, 2);
    let day = date.substr(6, 2);

    
    return (
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="user d-flex flex-row align-items-center"> 
                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2"/> 
                    <span>
                        <small class="font-weight-bold text-primary mr-2">{user}</small> 
                        <small class="font-weight-bold">{description}</small>
                    </span> 
                </div> 
                <small>{year + '/' + month + '/' + day}</small>
            </div>
        </div>
    )
}
