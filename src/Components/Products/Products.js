import React from 'react';
import styled from 'styled-components';
import Product from '../Products/Product';


const Products = ({ products, onAddToCart, alert }) => {


    return (
        <Main>
           {products.map((product) => 
            <Product product = {product} key={product.id} onAddToCart={onAddToCart} />
           )}
        </Main>
    )
}

const Main = styled.div `
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 680px){
        width: 100%;
    }
    
`;


export default Products
