import styled from 'styled-components';

const Header = (props) =>{
  return (
  <Nav>
    <Logo>
      <img src='/images/logo.svg' alt="" />
    </Logo>
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

export default Header;
