import styled from "styled-components";
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

    @media ${device.desktop} {
        height: 872px;
    }
`

export const Form = styled.form`  
    font-size: ${fontSizes.sizeMd};
    gap: 1.2rem;
    border-radius: 1rem;
    padding: 1rem;
    width: 30rem;
    margin: 0 0 0 0;
    -webkit-backdrop-filter: blur(8px);  /* Safari 9+ */
    backdrop-filter: blur(8px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.08);

    @media ${device.tablet} {
        width: 60rem;
        padding: 3rem;
    }

    @media ${device.desktop} {
        margin-top: 8rem;
    }

`

export const FormInput = styled.input`
    background: transparent;
    margin: 0.5rem 0 0.5rem 0;
    border: 0.1rem solid ${colors.buttonTextHover};
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    
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

    @media ${device.tablet} {
        font-size: ${fontSizes.sizeMdLg};
        padding: 2rem;
        margin: 1rem 0 1rem 0;
    }
`

export const FormButton = styled.button`
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