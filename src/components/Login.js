import styled from 'styled-components';

const Login = (props) =>{
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>Get Premier Access to Raya and the Last Dragon fot an additional fee with a Disney+ subscription. As of 05/25/21, the price of Disney Bundle will increase by $1.</Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
};


const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div `
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div `
background-image: url('/images/login-background.jpg');
height: 100%;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top:0;
left: 0;
right: 0;
z-index:-1;
`

const CTA = styled.div`
max-width: 650px;
display: flex;
flex-direction: column;
justify-content: center;
width : 100%;

`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
margin-left: auto;
margin-right: auto;
`;

const SignUp =styled.a`
font-weight: bold;
font-size: 18px;
letter-spacing: 1.5px;
color: #f9f9f9;
width: 100%;
background-color: #0063e5;
padding: 16.5px 0;
margin-bottom:12px;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
  background-color:#0483ee ;
}
`

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
letter-spacing: 1.5px;
width: 100%;
margin:0 0 24px;
line-height: 1.5;

`

const CTALogoTwo = styled.img`
width: 100%;
display: block;
max-width: 600px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
`;

export default Login;