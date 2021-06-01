import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick'


const ImgSlider = (props)=>{

  let settings = {
    dots:true,
    infinte:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
    autoplay:true
  }

  return(
    <Carousel  {...settings}>
      <Wrap>
        <a>
          <img src='/images/slider-badag.jpg'></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-badging.jpg'></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-scale.jpg'></img>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-scales.jpg'></img>
        </a>
      </Wrap>

    </Carousel>
  )
};


const Carousel = styled(Slider)`
 margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
position: relative;

  a{
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display:block;
    padding: 4px;
  

  img{
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }

  &:hover{
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.9);
    transition: 400ms;
  }
}
`



export default ImgSlider;