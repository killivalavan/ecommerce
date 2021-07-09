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
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    
`;


export default Products
