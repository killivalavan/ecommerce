import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo1.png';
import cart from '../img/cart.png';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ totalItems, setMycategory }) => {

    const url = useLocation();

    const selectHandler = e =>{
        setMycategory(e.target.outerText); 
    }
   
    return (
        <StyledNav>
            <div className="logo">
                <Link to="#">
                <h1> <img src={logo}  alt="" />
                Springoo</h1>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="dropdown">
                    <button>Category</button>
                    <div onClick={selectHandler} className="dropdown-content">
                        <Link to="#" value="All">All</Link>
                        <Link to="#" value="Fashion">Fashion</Link>
                        <Link to="#" value="Electronics">Electronics</Link>
                        <Link to="#" value="Grocery">Grocery</Link>
                    </div>
                </li>
                <li>
                    <Link to="#">Contact Us</Link>
                </li>
                <li className="main">
                    {url.pathname === '/' && (<Link to="/Cart">
                        <img className="cart" src={cart} alt="" />
                        <span className="badge">
                            <span className="count">{totalItems}</span>
                        </span>
                    </Link>)}
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div `
    min-height: 8vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: #011627;
    padding: 0rem 4rem;
    a{
        color: white;
    }
    .logo {
            flex: 3 1 40rem;
            h1{
            font-family: "Lobster", cursive;
            font-weight: normal;
            font-size: 2.5rem;
            margin-left: .5rem;
            img{
                margin-right: .5rem;
                width: 2.5rem;
                
            }
            span{
                background: red;
            }
        }
    }
    
    ul{
        flex: 1 1 30rem;
        display: flex;
        justify-content: space-around;

        li{
            font-size: 1.6rem;
            font-weight: 400;
        }
        .cart{
            width: 2rem;
        }
        .badge{
            font-size: 1rem;
            background: #d62246;
            border-radius: 50%;
            padding: .2rem .4rem;
            /* position: absolute;
            top: 6px;
            right: 54px;
            transform: translate(-54%, -6%); */
        }
    }
    .dropdown{
            position: relative;
            &:hover .dropdown-content{
                display: flex;
            }

        button{
            background: transparent;
            border: none;
            color: white;
            font-size: 1.5rem;
            font-weight: 400;
          }

        .dropdown-content{
            position: fixed;
            display: none;
            flex-direction: column;
            background: #011627;
            padding-top: 1.6rem;
            text-align: left;
            & :hover{
                    background: #343a40;
                }

            a{
               
                padding: .7rem 1rem; 
            }
        }
    }
    @media screen and (max-width: 680px){
       text-align: center;
       padding-bottom: .5rem;
    }
`;

export default Nav
