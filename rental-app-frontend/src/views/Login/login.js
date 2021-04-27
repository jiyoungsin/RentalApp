import React from 'react';

export default function login() {
    return (
        <div>
            <form>
                <label for="id">id</label>
                <input type="text"
                placeholder="JohnDoe@gmail.com"
                id="id"
                name="id"
                />
                <label for="password">password</label>
                <input type="text"
                placeholder=""
                id="password"
                name="password"
                />
                <input type="text"
                placeholder=""
                id="password"
                name="password"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
