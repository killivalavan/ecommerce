import React from 'react';
import styled from "styled-components";

const CartItem = ({item, updateCart, removeCart}) => {

    return (
        <Hero>
            <img src={item.media.source} alt="Iamge not found" />
            <div className="card-body">
                <div className="name">
                    <h3 className="item-name">{item.name}</h3>
                    <h5 className="price">{item.price.formatted_with_symbol}</h5>
                </div>
               <div className="buttons">
                    <button className="add-btn" onClick={()=>updateCart(item.id, item.quantity - 1)}>-</button>
                    <h3 className="qty">{item.quantity}</h3>
                    <button className="delete-btn" onClick={()=>updateCart(item.id, item.quantity + 1)}>+</button>
                    <button className="remove-btn" onClick={()=>removeCart(item.id)}>Remove</button>
                </div>
            </div>
           
        </Hero>
    )
}


const Hero = styled.div `
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1),0px 20px 20px rgba(0, 0, 0, 0.1);
    margin: 2rem;
    overflow: hidden;

    .card-body{
        margin: 1rem;
        .name{
            display: flex;
            justify-content: space-between;
        }
        .item-name,.price{
            font-size: 1.2rem;
            margin: .3rem;
        }
     
    }

    img{
        width: 20rem;
        height: 15rem;
        object-fit: cover;
    }

    .buttons{
        display: flex;
        background: transparent;
        align-items: center;
        min-height: 5vh;
        .add-btn,.delete-btn{
            width: 20px;
            background: transparent;
            border: none;
        }
        .remove-btn{
            background: #2f2933;
            color: white;
            font-size: 1rem;
            padding: .3rem .6rem;
            margin-left: 1rem;
            border: none;
            border-radius: 2px;
            transition: color .5s ease;
            &:hover{
                background: white;
                color: #2f2933;
                border: 2px solid #2f2933;
            }
        }
    }
    @media screen and (max-width: 680px){
    width: 15rem;
    margin: 1.5rem;
    margin-left: 2rem ;
      img{
        width: 15rem;
        height: 10rem;
        object-fit: cover;
    }
    }
`;

export default CartItem
