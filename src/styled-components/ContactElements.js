import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const FormSection = styled.section`
    background: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem;
`

export const FormWrapper = styled.div`
    /* //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem; */
`
export const Form = styled.form`  
    font-size: ${fontSizes.sizeMd};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    border-radius: 1rem;
    padding: 1rem;
    width: 30rem;
    height: 40rem;
    margin: 0 0 0 0;
    /* display: grid;
    grid-template-columns: max-content max-content;
    gap: 0.5rem; */
`

export const FormLabel = styled.label`
    text-align: center;
    margin: 0.5rem 0 0.5rem 0;
`

export const FormInput = styled.input`
    background: transparent;
    margin: 0.5rem 0 0.5rem 0;
    width: 11rem;
    border: 0.2rem solid ${colors.secondaryColor};
    text-align: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
`

export const FormTextarea = styled.textarea`
    background: transparent;
    margin: 0.5rem 0 0.5rem 0;
    width: 20rem;
    border: 2px solid red;
    width: 100%;
    border: 0.2rem solid ${colors.secondaryColor};
    padding: 1rem;
`

export const FormButton = styled.button`
    background: ${colors.buttonBackground};
    border-radius: 2rem;
    color: ${colors.buttonText};
    padding: 1rem 2rem ;
    font-size: ${fontSizes.sizeMd};
    border: none;
    margin-top: -60px;
`