import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const ContactUs = () => {
    return (
        <div className="container mt-5">
            <MDBContainer>
                <MDBRow
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Write to us</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="defaultFormContactNameEx"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="defaultFormContactEmailEx"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="defaultFormContactSubjectEx"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea
                                type="text"
                                id="defaultFormContactMessageEx"
                                className="form-control"
                                rows="3"
                            />
                            <div className="text-center mt-4">
                                <MDBBtn
                                    color="primary"
                                    outline
                                    type="submit"
                                    style={{ color: 'black', width: '100%' }}
                                >
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default ContactUs;
