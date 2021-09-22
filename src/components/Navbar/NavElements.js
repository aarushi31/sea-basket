import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import {FaBars} from 'react-icons/fa';

export const Nav=styled.nav`
    background:#fff;
    height:80px;
    display:flex;
    justify-content:space-between;
    padding:40px 120px;
    z-index:10;
    position:fixed;
    top:0;
    width:100vw;
`

export const NavLink=styled(Link)`
    color:#0E79BD;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 50px;
    height:100%;
    cursor:pointer;
    font-size:20px;
    font-weight:700;

    &.active{
        color:#15cdfc;
    }

`

export const Bars=styled(FaBars)`
display:none;
color:#000;

@media screen and(max-width:760px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translated(-100%,75%);
    font-size:1.8rem;
    cursor:pointer;
    z-index:100;
}
`

export const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;

    
`

export const NavBtn=styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;
    


    
`

export const NavBtnLink=styled(Link)`
    border-radius:4px;
    width:211px;
    background:#0E79BD;
    padding:15px 75px;
    color:#fff;
    border:none;
    font-size:20px;
    outline:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    font-weight:700;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010686;
    }

`