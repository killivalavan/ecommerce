import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import styled from 'styled-components';
import { Grid, RadioGroup, FormControlLabel } from '@material-ui/core'
import { Link } from 'react-router-dom';

const AddressForm = ({next}) => {
    const methods = useForm();

    return (
        <Section>
            <h3>Shipping address</h3>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next(data))} >
                    <Grid container spacing={3}>
                        <FormInput name= 'firstName' label='First name' />
                        <FormInput name= 'lastName' label='Last name' />
                        <FormInput name= 'address' label='Address' />
                        <FormInput name= 'email' label='Email' />
                        <FormInput name= 'city' label='City' />
                        <FormInput name= 'zip' label='Zip' />
                    </Grid>
                    <div className="buttons">
                        <Link to="/cart">
                            <button className="back">
                                Back to Cart
                            </button>
                        </Link>
                        <button className="submit" type="submit" >Next</button>
                    </div>
                   
                </form>
            </FormProvider>
        </Section>
    )
};

const Section = styled.div `
    h3{
        margin-top: 5rem;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 400;
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        .back{
            background: #ef233c;
            color: white;
            border: none;
            padding: .6rem 1.5rem;
            border-radius: 5px;
            transition: all .5s ease;
            &:hover{
                color: black;
                border: 2px solid black;
        }
        }
        .submit{
            padding: .6rem 1.5rem;
            background: #34a0a4;
            color: white;
            border: none;
            border-radius: 5px;
        }

    }
`;

export default AddressForm
