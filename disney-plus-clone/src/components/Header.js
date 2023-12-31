import React from 'react'
import styled from "styled-components"



const Header = () => {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>

        {/* navmenu */}
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" alt='icon img' /> 
                <span>HOME</span>
           </a>

           <a>
                <img src="/images/search-icon.svg" alt='icon img' /> 
                <span>SEARCH</span>
           </a>

           <a>
                <img src="/images/watchlist-icon.svg" alt='icon img' /> 
                <span>WATCHLIST</span>
           </a>

           <a>
                <img src="/images/original-icon.svg" alt='icon img' /> 
                <span>ORIGINALS</span>
           </a>

           <a>
                <img src="/images/movie-icon.svg" alt='icon img' /> 
                <span>MOVIES</span>
           </a>

           <a>
                <img src="/images/series-icon.svg" alt='icon img' /> 
                <span>SERIES</span>
           </a>

        </NavMenu>
        <UserImg src='https://lh3.googleusercontent.com/a/ACg8ocJrJ9TrbdMykG8VmkIwUxS0VgKsTMkehhUVl94QQShv-A=s192-c-rg-br100' alt='user-img'/>
      
    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div `
    display: flex;
    /* ovdje smo bukvalno flex 1 prosirio menu najvise sto moze i gurnuo
    account slicicu skroz desno */
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
    }
`

const UserImg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding-top: 10px;
    padding-right: 6px;
    cursor: pointer; 
`;