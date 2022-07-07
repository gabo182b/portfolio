import styled from "styled-components";

export const FormSection = styled.section`
    color: #fff;
    background: rebeccapurple;
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
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 0.5rem;
`

export const FormLabel = styled.label`
    text-align: center;
    margin-top: 0.3rem;
`

export const FormInput = styled.input`
    width: 11rem;
`
export const FormTextarea = styled.textarea`
    color: #fff;
`

export const FormButton = styled.button`
    margin: 1rem 0 0 0;
`