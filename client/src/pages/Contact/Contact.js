import React from "react";

const Contact = () => (
    <div className="row mx-auto justify-content-center" id="cardContainer">
        <div className="col-md-6">
            <div className="card">
                <h4 className="card-header text-center">Contact Us</h4>
                <div className="card-body">
                    <form method="POST" action="https://formspree.io/friend.bubble.connect@gmail.com">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" className="form-control" type="text" placeholder="Your name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" className="form-control" type="text" placeholder="Your email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Message</label>
                            <textarea name="message" className="form-control" rows="3" type="text" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;