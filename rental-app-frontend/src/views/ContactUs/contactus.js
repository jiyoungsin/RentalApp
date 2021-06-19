import React from 'react';

export default function ContactUs() {
    return (
        <div className="container mt-5 nav justify-content-center">
            <div className="wrapper">
                <div className="content">
                    <h1>Contact Us</h1>
                    <p>Connect with us by sending us messages.</p>
                </div>

                <div className="form">
                    <div className="top-form">
                        <div className="inner-form">
                            <div className="label">Full name</div>
                            <input type="text" placeholder="Jhon" />
                        </div>
                        <div className="inner-form">
                            <div className="label">Email</div>
                            <input type="text" placeholder="Example@gmail.com" />
                        </div>
                        <div className="inner-form">
                            <div className="label">Phone</div>
                            <input type="text" placeholder="1234567890" />
                        </div>
                    </div>

                    <div className="middle-form">
                        <div className="inner-form">
                            <div className="label">Subject</div>
                            <input type="text" placeholder="Subject" />
                        </div>
                    </div>

                    <div className="bottom-form">
                        <div className="inner-form">
                            <div className="label">message</div>
                            <textarea placeholder="Your message"></textarea>
                        </div>
                    </div>

                    <div className="btn">send form</div>
                </div>
            </div>
        </div>
    );
}
