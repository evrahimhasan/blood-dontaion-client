import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Donation = () => {
    const { user } = use(AuthContext)
    const handleCheckout = (e) => {
        e.preventDefault()
        const donateAmount = e.target.donateAmount.value;
        const donorEmail = user?.email;
        const donorName = user?.name;

        const formData = {
            donateAmount,
            donorEmail,
            donorName
        }

        axios.post('http://localhost:5000/create-payment-checkout', formData)
            .then(res => {
                console.log(res.data);
                window.location.href = res.data.url
            })
    }
    return (
        <div>
            <form onSubmit={handleCheckout} className='fllex justify-center items-center min-h-screen gap-4' >
                <input
                    name='donateAmount'
                    type="text"
                    placeholder='Type here'
                    className='input' />
                <button className='btn btn-primary' type='submit'>Donate</button>
            </form>
        </div>
    );
};

export default Donation;