import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlans, getCurrentUser } from '../Features/User/UserSlice';
import { Link, useNavigate } from 'react-router-dom';

const PricingPlans = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allPlans = useSelector(state => state.User.allPlans?.data);
    const currentUser = useSelector(state => state.User.currentUser); // Assuming you store currentUser in Redux

    useEffect(() => {
        dispatch(getAllPlans());
        dispatch(getCurrentUser(profileDetails?._id))
    }, [dispatch]);

    const handleBuyNow = async (planId) => {
        // Call the backend to create an order
        if (!profileDetails) {
            // Redirect to login page if not logged in
            setTimeout(() => {
                navigate('/login');
            },100)
            return;
        }
        const res = await fetch('http://localhost:4000/api/plan/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: currentUser?._id, // Sending the user ID
                planId,
            }),
        });

        const data = await res.json();
        if (data.order) {
            // Initialize Razorpay checkout
            const options = {
                key: 'rzp_test_gpCBVNamBYgZkc', // Replace with your Razorpay key
                amount: data.order.amount, // Amount is in paise (1 INR = 100 paise)
                currency: 'INR',
                order_id: data.order.id,
                handler: function (response) {
                    // Handle successful payment
                    fetch('http://localhost:4000/api/plan/verify-payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            paymentId: response.razorpay_payment_id,
                            orderId: data.order.id,
                            userId: currentUser?._id,
                            planId,
                            amount:data.order.amount
                        }),
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            alert('Payment successful');
                        } else {
                            alert('Payment verification failed');
                        }
                    });
                },
                prefill: {
                    name: currentUser?.name,
                    email: currentUser?.email,
                    contact: currentUser?.mobileNumber,
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } else {
            alert('Failed to create order');
        }
    };

    return (
        <>
            <section>
                <div className="plans-ban">
                    <div className="container">
                        <div className="row">
                            <span className="pri">Pricing</span>
                            <h1>Get Started <br /> Pick your Plan Now</h1>
                            <span className="nocre">No credit card required</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="plans-main">
                    <div className="container">
                        <div className="row">
                            <ul>
                               {
                                allPlans?.map((plan, idx) => {
                                    return (
                                        <li key={plan._id}>
                                            <div className={`pri-box ${idx === 1 ? 'pri-box-pop' : ''}`}>
                                                <h2>{plan?.name}</h2>
                                                <p>Printer took a type and scrambled</p>
                                                <Link
                                                    className="cta" 
                                                    onClick={() => handleBuyNow(plan._id)}
                                                    
                                                >
                                                    Buy Now
                                                </Link>
                                                <span className="pri-cou"><b>{plan?.price}₹</b></span>
                                                <ol>
                                                    <li><i className="fa fa-close close" aria-hidden="true"></i> 5 Premium Profiles view /mo</li>
                                                    <li><i className="fa fa-check" aria-hidden="true"></i>Free user profile can view</li>
                                                    <li><i className="fa fa-close close" aria-hidden="true"></i>View contact details</li>
                                                    <li><i className="fa fa-close close" aria-hidden="true"></i>Send interest</li>
                                                    <li><i className="fa fa-close close" aria-hidden="true"></i>Start Chat</li>
                                                </ol>
                                            </div>
                                        </li>
                                    );
                                })
                               }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlans;
