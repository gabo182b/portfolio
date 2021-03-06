import styled from "styled-components";
import { Link } from "react-scroll/modules";
import { FaTimes } from "react-icons/fa";
import { colors, fontSizes } from "./variables";



export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${colors.mainColor};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    z-index: 20;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 6rem);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 5rem);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`
