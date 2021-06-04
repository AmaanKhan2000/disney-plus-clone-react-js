import styled from 'styled-components';

import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';

import Viewers from './Viewers';

const Home = (props) =>{
  return(

    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>

  )


};


const Container = styled.div`
  position: relative;
  top: 72px;
  overflow-x: hidden;
  min-height: calc(100vh - 250px);
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url('/images/home-background.png') center center/ cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

`

export default Home;