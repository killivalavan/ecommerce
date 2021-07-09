import React, {Fragment} from 'react';
import CartItem from '../Cart/CartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = ({cart, updateCart, removeCart, emptyCart}) => {

    const EmptyCart = () =>(
        <StyledEmptCart>
            <h3>You have no itesm in your shopping cart</h3>
            <button> 
                <Link to="/">
                    Shop Now
                </Link>
            </button>
        </StyledEmptCart>
    )
        
    const FilledCart = () =>(
        <StyledCart>
            <div className="filledCart">
                {cart.line_items.map((item) => (
                    <CartItem key={item.id} item={item} updateCart={updateCart} removeCart={removeCart}/>
                ))}
            </div>
            <div className="cardDetails">
                <h3>Subtotal: <span>{cart.subtotal.formatted_with_symbol}</span></h3>
                <button className="empty-cart" onClick={emptyCart}>Empty Cart</button>
                <Link to="/checkout">
                    <button className="checkout">Checkout</button>
                </Link>
            </div>
        </StyledCart>
    );

    if(!cart.line_items) return <h2>Loading...</h2>;

    return (
        <Hero>
            <h1>Your Shopping Cart</h1>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Hero>
    )
}


const StyledCart = styled.div `
    width: 80%;
    margin: auto;

    .filledCart{
        display: flex;
        flex-wrap: wrap;
        //width: 80%;
        //margin:auto;
        
    }
    .cardDetails{
        margin: 10rem 0rem;
        h3{
            font-size: 2rem;
            font-weight: 500;
            span{
                font-weight: 500;
            }
        }
    }

    @media screen and (max-width: 680px){
        width: 100%;
        margin: auto;
        .cardDetails{
            margin: 5rem auto;
            width: 95%;
            margin-left: 2rem;
        }
        .filledCart{
            width: 90%;
            margin:auto;
    
        }
    }
`;

const Hero = styled.div`
   
    h1{
        font-size: 3rem;
        font-weight: lighter;
        margin: 5rem;
        text-align:center;
    }
    .empty-cart, .checkout{
        margin: 2rem 2rem 0rem 0rem;
        background: #34a0a4;
        padding: .8rem 1.8rem;
        color: white;
        border: none;
    }
    .empty-cart{
        background: #ef233c;
    }
`;

const StyledEmptCart = styled.div `
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 2rem;
        font-weight: lighter;
        text-align: center;
        align-items: center;
    }
    button{
        margin-top: 2rem;
        padding: 1rem 2rem;
        background: #34a0a4;
        border: none;
    }
    a{
        color: white;
    }
`;


export default Cart
