import styled from "styled-components";
import { colors, fontSizes } from "./variables";

export const FormSection = styled.section`
    background: ${colors.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //height: 53.75rem;
    height: 860px;
    width: 100%;
    max-width: 68.75rem;
    padding: 0 1.5rem;
`
export const Form = styled.form`  
    font-size: ${fontSizes.sizeMd};
    border: 1px red solid ;
    border-radius: 1rem;
    background: rebeccapurple;
    padding: 1rem;
    background: ${colors.white};
    width: 30rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 2.5rem 0;
    /* display: grid;
    grid-template-columns: max-content max-content;
    gap: 0.5rem; */
`

export const FormLabel = styled.label`
    text-align: center;
    margin: 0.5rem 0 0.5rem 0;
`

export const FormInput = styled.input`
    margin: 0.5rem 0 0.5rem 0;
    width: 11rem;
`

export const FormTextarea = styled.textarea`
    width: 20rem;
`

export const FormButton = styled.button`
    margin: 0 0 9rem 0;
    padding: 0.5rem;
    font-size: ${fontSizes.sizeMd};

`