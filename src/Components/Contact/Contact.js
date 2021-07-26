import React,{ useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import contact from '../../img/contact.svg';
import check from '../../img/check.svg';
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
        <Main>
            <Container>
                <div className={`card ${swap? "flipped" : ""}`}>
                    <div className="front">
                        <img src={contact} alt="" />
                        <p>Have any questions? We’d love to hear from you.</p>
                        <button onClick={swapHandler}>Contact Us</button>
                    </div>
                    <div className="back">
                        <h1>Contact Us</h1>
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/xwkandqb" method="post">
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
        </Main>
    )
};

const Main = styled.div`
    //min-height: 72vh;
    /* @media screen and (max-width: 680px){
        min-height: 20vh;
       
    } */
`;

const Container = styled.div`
    min-height: 40vh;
    position: relative;
    perspective: 800px;
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -o-perspective: 800px;
    width: 30%;
    margin: 15rem auto;
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: transform 1s;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
    }

    .card div {
        background: #F8F8F8;
        padding: 2rem;
        min-height: 50vh;
        position: absolute;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden; 
        -o-backface-visibility: hidden;
    }

    .card .front {
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        img{
            width: 100%;
        }
        p{
            font-size: 1.4rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        button{
            margin-top: 1rem;
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
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        text-align: center;
        h1{
                padding-bottom: 2rem;
            }
        form{
            input, textarea, button{
                width: 100%;
                margin: .7rem auto;
                padding: .6rem 1rem;
                border: 2px solid #F8F8F8;
                border-radius: 25px;
                outline: none;
                resize: none;
                font-family: 'Roboto', sans-serif;
                transition: border .5s ease;
                &:focus{
                    border: 2px solid #E0E0E0;
                }
            }
            button{
                background: black;
                color: white;
            }
        }
    }
    .card.flipped {
        transform: rotateY( 180deg );
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
    }

    @media screen and (max-width: 680px){
        min-height: 65vh;
        width: 80%;
        margin: 4rem auto;
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
        width: 6%;
    }
    h1{
       margin: 2rem 0rem .8rem 0rem ;
    }
    p{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    button{
        font-size: 1rem;
        margin-bottom: 2rem;
        border-radius: 20px;
        padding: .3rem 1rem;
        border: 2px solid black;
        background: black;
        color: white;
        transition: all .5s ease;
        &:hover{
            background: white;
            color: black;
        }
    }
    @media screen and (max-width: 680px){
        width: 80%;
        h1{
            font-size: 1.5rem;
        }
        img{
            width: 15%;
        }     
    }
`;

export default Contact;
