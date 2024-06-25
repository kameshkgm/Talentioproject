import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5 form-container" id="contact-section">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Query</label>
                    <textarea className="form-control" id="query" rows="3" placeholder="Enter your query"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
