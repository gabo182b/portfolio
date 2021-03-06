import styled from "styled-components";
import { Link } from "react-scroll/modules";
import { fontSizes, colors, device } from "./variables";



export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#0E0C15' : 'transparent')};
    opacity: 0.6;
    height: 80px;
    margin: -80px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 3;

    @media ${device.tablet} {
        transition: 0.8s all ease;
    }

    /* @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    } */
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 5rem;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 68.75rem;
`

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        color: #fff;
        top: 0;
        right: 0;
        font-size: 4rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -1.375rem;

    @media screen and (max-width: 768px){
        display: none;
       
    }
`

export const NavItem = styled.li`
    //height: 5rem;
    height: 80px;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: ${fontSizes.sizeMd};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #fff;
    }

    @media ${device.tablet} {
        font-size: ${fontSizes.sizeMdLg}
    }
`