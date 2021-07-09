import React from 'react';
import styled from 'styled-components';
import cart from '../../img/cart.svg';


const Product = ({ product, onAddToCart}) => {
    return (
        <Card>
            <div className="card-img">
                <img src={product.media.source} alt="" />
            </div>
            <div className="card-body">
                <h2>{product.name}</h2>
                <p dangerouslySetInnerHTML={{__html: product.description}}></p>
                <h4 className="price" > &#x20b9; {product.price.formatted}</h4>
                <button className="cart" onClick={()=>onAddToCart(product.id, 1)}>
                    <img src={cart} alt="" />
                </button>
                
            </div>
        </Card>
    )
}

const Card = styled.div `
    margin: 2rem;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1),0px 20px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    .card-body{
        margin: 1rem;
        position: relative;
       
        .cart{
            position: absolute;
            top: 60%;
            right: 5%;
        }
    }
    .price{
        margin-top: 1.5rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
    img{
        width: 25rem;
        height: 20rem;
        object-fit: cover;
    }
    button{
        background: transparent;
        border: none;
        font-size: 2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 680px){
        margin: 2rem 1rem;
        font-size: .7rem;
        img{
        width: 15rem;
        height: 11rem;
    }
    .cart{
        width: 2rem;
        height: 2rem;
    }
    .price{
            font-size: 1rem;
        }
      
    }
`;

export default Product
