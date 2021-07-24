import React,{ useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import contact from '../../img/contact.svg';
import check from '../../img/check.png';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [swap , setSwap] = useState(false);

    const swapHandler = () =>{
        setSwap(!swap);
    } 

    const [state, handleSubmit] = useForm("xwkandqb");
    if (state.succeeded) {
        return (
            <Thanks>
                <img src={check} alt="" />
                <h1>Thanks You!</h1>
                <p>Your response was submitted.</p>
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
            </Thanks>
        );
    }

    return (
        <>
            <Container>
                <div className={`card ${swap? "flipped" : ""}`}>
                    <div className="front">
                        <img src={contact} alt="" />
                        <p>Have any questions? We’d love to hear from you.</p>
                        <button onClick={swapHandler}>Contact Us</button>
                    </div>
                    <div className="back">
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/xwkandqb" method="post">
                            <h1>Contact Us</h1>
                            <input type="text" name="name" id="" placeholder="Name" className="name" />
                            <ValidationError 
                                prefix="name" 
                                field="text"
                                errors={state.errors}
                            />
                            <input type="email" name="email" className="email" placeholder="Email address"  />
                            <ValidationError 
                                prefix="email" 
                                field="email"
                                errors={state.errors}
                            />
                            <input type="number" name="number" className="number" placeholder="Number"  />
                            <ValidationError 
                                prefix="number" 
                                field="number"
                                errors={state.errors}
                            />
                            <textarea name="message" name="message" type="text" id="" cols="30" rows="7" className="meggases" placeholder="Message" ></textarea>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                            <button disabled={state.submitting} type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </Container>  
        </>
    )
};

const Container = styled.div`
    min-height: 62vh;
    position: relative;
    perspective: 800px;
    width: 30%;
    margin: 10rem auto;
    
    .card {
        background: #F8F8F8;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card div {
        position: absolute;
        backface-visibility: hidden;
    }

    .card .front {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin: auto;
        p{
            font-size: 1.4rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        button{
            padding: .4rem 1rem;
            border-radius: 5px;      
            background: #6c79d9;
            color: white;
            border: 2px solid #6c79d9;
            transition: all .3s ease-in;
            &:hover{
                border: 2px solid #f9494b;
                color: #f9494b;
                background: transparent;
            }
        }
    }
    
    .card .back {
        transform: rotateY( 180deg );
        width: 80%;
        form{
            display: flex;
            flex-direction: column;
            text-align: center;
            input, textarea, button{
                margin: 1rem;
                padding: .6rem 1rem;
                border: 2px solid #F8F8F8;
                border-radius: 25px;
                outline: none;
                resize: none;
                font-family: 'Roboto', sans-serif;

            }
            button{
                background: black;
                color: white;
            }
        }
    }
    .card.flipped {
        transform: rotateY( 180deg );
    }
    @media screen and (max-width: 680px){
        width: 80%;
    }
`;

const Thanks = styled.div`
    background: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 10rem auto;
    img{
        margin-top: 2rem;
        width: 5%;
    }
    h1{
       margin: 2rem 0rem .8rem 0rem ;
    }
    p{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    button{
        margin-bottom: 2rem;
        border-radius: 2px;
        padding: .3rem 1rem;
        border: 1px solid black;
        background: black;
        color: white;
    }
    @media screen and (max-width: 680px){
        width: 80%;
        img{
            width: 15%;
        }
        h1{
            font-size: 1.5rem;
        }
        button{
            font-size: 1rem;
        }        
    }
`;

export default Contact;
