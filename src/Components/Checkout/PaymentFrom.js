import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import Review from '../Checkout/Review';
import styled from 'styled-components';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentFrom = ({onCaptureCheckout,checkoutToken, shippingData, backStep, nextStep}) => {

    const handleSubmit = async (e, elements, stripe) =>{
        e.preventDefault();

        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        
        if(error){
            console.log(error);
        }else{
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.firstname, 
                    lastname: shippingData.lastname,
                    email: shippingData.email,
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address,
                    town_city: shippingData.city,
                    postal_zip_code: shippingData.zip,

                },
                fullfillment: { shipping_method: shippingData.shippingOption},
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            onCaptureCheckout(checkoutToken.id, orderData);
            nextStep();
        }
    }
    
    return (
        <div>
            <Review checkoutToken={checkoutToken}/>
            <Line></Line>
            <Tooltip className="tooltip">
                <span className="tooltiptext">To test gateway, type all 4242</span>
                <Payment>Payment method</Payment>
            </Tooltip>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) =>(
                         <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                <CardElement/>
                            {/* <label htmlFor="pod"><h3>Pay on Delivery</h3></label>
                            <input name="pod" type="radio" /> */}
                            <br/><br/>
                            <Button>
                                <button onClick={backStep}>Back</button>
                                <button className='submit' type="submit" disabled={!stripe}>
                                Place order
                            </button>
                      </Button>
                     </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    )
};

const Line = styled.div`
    border-bottom: 1px solid #dee2e6;
    margin: 2rem 0rem;
`;

const Payment =styled.div`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const Button = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        background: #ef233c;
        padding: .3rem 1.5rem;
        color: white;
        border: none;
        border-radius: 2px;
    }
    .submit{
        background: #34a0a4;
    }
`;

const Tooltip = styled.div `
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    &:hover .tooltiptext{
        visibility: visible;
    }

    .tooltiptext {
        visibility: hidden;
        width: 120px;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
}
`;

export default PaymentFrom
