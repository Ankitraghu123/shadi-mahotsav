import React from 'react';

const SubHeadingSection = () => {
    return (
        <section>
            {/* Sub-Heading */}
            <div className="all-pro-head">
                <div className="container">
                    <div className="row">
                        <h1>Lakhs of Happy Marriages</h1>
                        <a href="sign-up.html">
                            Join now for Free <i className="fa fa-handshake-o" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Filter on Mobile View */}
            <div className="fil-mob fil-mob-act">
                <h4>Profile filters <i className="fa fa-filter" aria-hidden="true"></i></h4>
            </div>
        </section>
    );
};

export default SubHeadingSection;
