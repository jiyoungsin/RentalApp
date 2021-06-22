import React from 'react';

export default function FAQ() {
    return (
        <div className="container mt-5">
            <div className="faq-header">Frequently Asked Questions</div>

            <div className="faq-content">
                <div className="faq-question">
                    <input id="q1" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label for="q1" className="panel-title">
                        What is the main purpose of this App?
                    </label>
                    <div className="panel-content">It is to make renting digitally easy.</div>
                </div>

                <div className="faq-question">
                    <input id="q2" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label for="q2" className="panel-title">
                        Is the payment trusted and secured?
                    </label>
                    <div className="panel-content">
                        We use the latest and updated version of Strip API, whic is one of the most
                        secured payment services currently on the market
                    </div>
                </div>

                <div className="faq-question">
                    <input id="q3" type="checkbox" className="panel" />
                    <div className="plus">+</div>
                    <label for="q3" className="panel-title">
                        What happens if theres an issue with the houses thats rented?
                    </label>
                    <div className="panel-content">
                        We have an online Maintenance Request Form, that can be filled up by tenant,
                        and we will look further into the problem with the landlord
                    </div>
                </div>
            </div>
        </div>
    );
}
