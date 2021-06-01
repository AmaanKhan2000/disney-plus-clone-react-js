import styled from 'styled-components';

import { useDispatch , useSelector } from 'react-redux';

import {useHistory} from 'react-router-dom';

import {selectUserName, setUserLoginDetails, selectUserPhoto, setSignOutState} from '../features/user/userSlice'

import {auth, provider} from '../firebase.js'

import {useEffect} from 'react';

const Header = (props) =>{

  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  const handleAuth = () =>{
    if(!username){
    auth.signInWithPopup(provider).then((result)=>{
      setUser(result.user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  else if(username){
    auth.signOut().then(()=>{
      dispatch(setSignOutState());
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async(user)=>{
      if(user) {
        setUser(user)
        history.push('/home')
      }
    })

  }, [username])



  const setUser = (user) =>{
    dispatch(setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo:user.photoURL,
    }))
  }

  return (
  <Nav>
    <Logo>
      <img src='/images/logo.svg' alt="" />
    </Logo>

    {!username? <Login onClick={handleAuth}>Login</Login> :
    <>

    
    <NavMenu>
      <a href='/home'>
        <img src ='/images/home-icon.svg' alt='HOME' />
        <span>HOME</span>
      </a>
      <a href='/search'>
        <img src ='/images/search-icon.svg' alt='SEARCH' />
        <span>SEARCH</span>
      </a>
      <a href='/watchlist'>
        <img src ='/images/watchlist-icon.svg' alt='HOME' />
        <span>WATCHLIST</span>
      </a>
      <a href='/originals'>
        <img src ='/images/original-icon.svg' alt='HOME' />
        <span>ORIGINALS</span>
      </a>
      <a href='/movies'>
        <img src ='/images/movie-icon.svg' alt='HOME' />
        <span>MOVIES</span>
      </a>
      <a href='/series'>
        <img src ='/images/series-icon.svg' alt='HOME' />
        <span>SERIES</span>
      </a>
    </NavMenu>
    <SignOut>
    <UserImg src={userphoto}  />
    <Dropdown>
      <span onClick={handleAuth}>Sign Out</span>
    </Dropdown>
    </SignOut>
    
    </>
    }
  </Nav>
  )
};

const Nav = styled.nav`
display: flex;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
padding: 0 36px;
background-color:#090b13;
letter-spacing: 16px;
align-items: center;
z-index: 3;
`

const Logo = styled.a`
width: 80px;
padding:0;
margin-top: 4px;
max-height: 70px;
font-size:0;
display: inline-block;
img{
  display: block;
  width: 100%;
}
`

const NavMenu = styled.div`
margin-right: auto;
margin-left: 25px;
display: flex;
height: 100%;
justify-content: flex-end;
flex-flow: row nowrap;
position: relative;
align-items: center;

a{
  display: flex;
  align-items:center;
  padding: 0 12px;


img{
  height: 20px;
  width: 20px;
  min-width: 20px;
  z-index: auto;
}

span{
  color:rgb(249,249,249);
  font-size: 13px;
  letter-spacing: 1.42px;
  line-height: 1.08;
  padding: 2px 5px;
  white-space: nowrap;
  position: relative;

  &:before {
    background-color: rgb(249,249,249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: '';
    height: 2px;
    opacity: 0;
    position: absolute;
    left:0px;
    right: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
    visibility: hidden;
    width: auto;
  }
}

&:hover{

  span:before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
  }
}
}

@media (max-width:758px){
  display: none;
}
`
const Login = styled.a`
background-color:rgba(0,0,0,0.6) ;
padding: 8px 16px;
letter-spacing: 1.5px;
text-transform: uppercase;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: 200ms ease-out;

&:hover{
  background-color: #f9f9f9;
  color:#000;
  border-color: transparent;
}

`

const UserImg = styled.img`
height: 100%;
`



const Dropdown = styled.div`
position: absolute;
top: 15px;
right: 100px;
background-color: rgb(19,19,19);
border: 1px solid rgb(151,151,151,0.34);
border-radius: 5px;
box-shadow: rgb(0 0 0 /50%) 0px 0px;
padding: 10px;
letter-spacing: 2px;
opacity: 0;


  &:hover {
    background-color: #fff;
    color: rgb(19,19,19);
    cursor: pointer;
    transition: ease-in 200ms;
  }
`;

const SignOut = styled.div`
height: 48px;
width: 48px;
 ${UserImg}{
   border-radius: 50%;
 }
 display: flex;
 justify-content: center;
 align-items: center; 
 &:hover{
  ${Dropdown}{
   opacity: 1;
   transition: ease-in 200ms;
 }
 }

`;


export default Header;
