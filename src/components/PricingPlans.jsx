import React from 'react';
// import './PricingPlans.css'; // Assuming you have a CSS file for styling

const PricingPlans = () => {
    return (
        <>
            {/* PRICING PLANS */}
            <section>
                <div className="plans-ban">
                    <div className="container">
                        <div className="row">
                            <span className="pri">Pricing</span>
                            <h1>Get Started <br /> Pick your Plan Now</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <span className="nocre">No credit card required</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}

            {/* PRICING PLANS */}
            <section>
                <div className="plans-main">
                    <div className="container">
                        <div className="row">
                            <ul>
                                <li>
                                    <div className="pri-box">
                                        <h2>Free</h2>
                                        <p>Printer took a type and scrambled </p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>$0</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i> 5 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i>View contact details</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i>Send interest</li>
                                            <li><i className="fa fa-close close" aria-hidden="true"></i>Start Chat</li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <div className="pri-box pri-box-pop">
                                        <span className="pop-pln">Most popular plan</span>
                                        <h2>Gold</h2>
                                        <p>Printer took a type and scrambled </p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>$349</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> 20 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <div className="pri-box">
                                        <h2>Platinum</h2>
                                        <p>Printer took a type and scrambled </p>
                                        <a href="sign-up.html" className="cta">Get Started</a>
                                        <span className="pri-cou"><b>$549</b>/mo</span>
                                        <ol>
                                            <li><i className="fa fa-check" aria-hidden="true"></i> 50 Premium Profiles view /mo</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>View contact details</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Send interest</li>
                                            <li><i className="fa fa-check" aria-hidden="true"></i>Start Chat</li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
        </>
    );
};

export default PricingPlans;
