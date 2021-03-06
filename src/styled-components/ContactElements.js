import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fontSizes, device } from "./variables";

export const FormSection = styled.section`
    background: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 780px;
    width: 100%;

    @media ${device.tablet} {
        height: 1115px;
    }

    @media ${device.xlScreen} {
        height: 872px;
    }
`

export const Form = styled.form`  
    border-radius: 1rem;
    padding: 1rem;
    width: 30rem;
    margin: 0 0 0 0;
    //box-shadow: 5px 5px 16px 2px rgba(0,0,0,0.67);
    -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.08);

    @media ${device.tablet} {
        width: 60rem;
        padding: 3rem;
    }

    @media ${device.xlScreen} {
        margin-top: 8rem;
    }

`

export const FormInput = styled.input`
    background: transparent;
    margin: 0.5rem 0 0.5rem 0;
    border: 0.1rem solid ${colors.buttonTextHover};
    text-align: center;
    border-radius: 0.5rem;
    padding: 1.5rem;
    font-size: ${fontSizes.sizeMd};
    width: 100%;
    color: ${colors.white};
    outline: none ;

    &:-webkit-autofill {
        box-shadow: 0 0 0 1000px #211e27;
        -webkit-box-shadow: 0 0 0 1000px #211e27 inset !important;
        -webkit-text-fill-color: ${colors.white} !important;
    } 

    &:focus {
        border: 0.1rem solid ${colors.buttonTextHover};
        box-shadow: 0px 0px 4px rgb(255,255,255);  
    }
    
    @media ${device.tablet} {
        font-size: ${fontSizes.sizeMdLg};
        padding: 2rem;
        margin: 1rem 0 1.5rem 0;
    }
`

export const FormTextarea = styled.textarea`
    background: transparent;
    margin: 0.5rem 0 0.5rem 0;
    width: 20rem;
    border: 2px solid red;
    width: 100%;
    border: 0.1rem solid ${colors.buttonTextHover};
    padding: 1rem;
    color: ${colors.white};
    font-size: ${fontSizes.sizeMd};
    outline: none ;

    &:focus {
        border: 0.1rem solid ${colors.buttonTextHover};
        box-shadow: 0px 0px 4px rgb(255,255,255);        
    }

    @media ${device.tablet} {
        font-size: ${fontSizes.sizeMdLg};
        padding: 2rem;
        margin: 1rem 0 1rem 0;
    }
`

export const FormButton = styled(motion.button)`
    background: ${colors.buttonBackground};
    border-radius: 2rem;
    color: ${colors.buttonText};
    padding: 1rem 2rem ;
    font-size: ${fontSizes.sizeMd};
    border: none;
    margin-top: 1rem;

    @media ${device.tablet} {
        font-size: ${fontSizes.sizeMdLg};
        padding: 2rem;
        margin-top: 3rem;
    }
`