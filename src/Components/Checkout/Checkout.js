import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stepper from 'react-stepper-horizontal';
import AddressFrom from './AddressForm';
import PaymentFrom from './PaymentFrom'; 
import { commerce } from '../../Library/commerce';
import { Link, useHistory } from 'react-router-dom';
import spinner from '../../img/loading.gif';

const Checkout = ({cart, order, onCaptureCheckout, error}) => {

    //const history = useHistory();
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    useEffect(() =>{
        const generateToken = async () => {
            try{
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            }catch (error) {
                //history.pushState("/");
            }
        }
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) =>{
        setShippingData(data);
        nextStep();
    }

    const timeout = () =>{
        setTimeout(()=>{
            setIsFinished(true);
        }, 3000);
    }

    
    const Confirmation = () => order.customer ?(
        <Success>
         <div>
            <h2>Thanks your for your purchase, {order.customer.firsname} {order.customer.lastname}</h2>
            <h3>Order ID: {order.customer_reference}</h3>
        </div>
        <br />
        <Link to="/">
            <button>Back to Home</button>
        </Link>
        </Success>    
   ): isFinished ?(
       <>
            <div className="spinner">
                    <h2>Thanks your for your purchase</h2>
            </div>
            <br />
            <Link to="/">
                <button>Back to Home</button>
            </Link>
       </>
   ): (
    <div className="spinner">
        {/* <h2>Loading....</h2> */}
        <img src={spinner} alt="spinner" />
    </div>
   );

   if(error){
       <>
        <h2>Error: {error}</h2>
        <Link to="/">
            <button>Back to Home</button>
        </Link>
       </>
   }

    const Form = () => activeStep === 0 ? 
    <AddressFrom next={next} /> : 
    <PaymentFrom shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout}/> 


    return (
        <Hero>
            <div>
                <Stepper steps={ [{title: 'Shipping Address'}, {title: 'Payment details'}] } activeStep={activeStep} />
            </div>
            {activeStep === 2 ? <Confirmation /> : <Form />}
        </Hero>
    )
};

// Stepper
const Hero = styled.div`
 width: 50%;
 margin: auto;
 padding: 3rem;
 box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1),0px 5px 10px rgba(0, 0, 0, 0.1);
 text-align: center;
 border-radius: 5px;
 .spinner img{
    width: 50%;
 }
 
 @media screen and (max-width: 680px){
    width: 90%;
 }
`;

const Success = styled.div`
    h2{
        margin-top: 4rem;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    button{
        padding: .6rem 1.5rem;
        font-size: 1.3rem;
        background: #dc0073;
        color: white;
        border: none;
    }
`;

export default Checkout
