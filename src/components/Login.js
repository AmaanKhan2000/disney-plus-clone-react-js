import styled from 'styled-components';

const Login = (props) =>{
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo.svg" alt="" />
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
margin-bottom: 2vw;
`;

const CTALogoOne = styled.image`
margin-bottom: 12px;
max-width: 600px;
`;

export default Login;