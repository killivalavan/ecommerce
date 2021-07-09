import React from 'react';
import styled from 'styled-components';

const Review = ( {checkoutToken}) => {
    console.log(checkoutToken);
    return (
        <Hero>
            <h3 className="title">Order summary</h3>
            <div>
                {checkoutToken.live.line_items.map((product) =>(
                    <div className='content' key={product.name}>
                        <div className="left">
                            <h3>{product.name}</h3>
                            <h3 className="qty">Quantity: {product.quantity}</h3>
                        </div>
                        <div className="right">
                            <h3>{product.price.formatted_with_symbol}</h3>
                        </div>
                    </div>
                ))}
            </div> 
            <div className="total">
              <h3>Total</h3>
              <h3 className="price">{checkoutToken.live.subtotal.formatted_with_symbol}</h3>
            </div>   
        </Hero>
    )
};

const Hero = styled.div `
    .title{
        margin: 3rem 0rem;
        font-size: 1.8rem;
        font-weight: 400;
    }
    
   .content{
        margin-top:2rem ;
        display: flex;
        justify-content: space-between;
        text-align: left;
        h3{
            font-size: 1.3rem;
            font-weight: 500;
        }
   }
   .qty{
       opacity: 0.5;
   }
   .total{
      text-align: left;
      margin-top: 3rem;
      h3{
          margin-top: 1rem;
          font-size: 1.3rem;
          font-weight: 500;
      }
      .price{
          font-weight: bold;
      }
   }
`;

export default Review
