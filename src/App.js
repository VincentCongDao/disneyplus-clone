import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import Card from "./components/Card";
import "./App.css";
// images
import logo1 from "./assets/images/cartoon_6.jpg";
import logo2 from "./assets/images/cartoon_5.jpg";
import logo3 from "./assets/images/cartoon_4.jpg";
import logo4 from "./assets/images/cartoon_3.jpg";
import logo5 from "./assets/images/cartoon_2.jpg";
import logo6 from "./assets/images/cartoon_1.jpg";
// videos
import video1 from "./assets/videos/Cartoon_1.mp4";
import video2 from "./assets/videos/Cartoon_1.mp4";
import video3 from "./assets/videos/Cartoon_1.mp4";
import video4 from "./assets/videos/Cartoon_1.mp4";
import video5 from "./assets/videos/Cartoon_1.mp4";
import video6 from "./assets/videos/Cartoon_1.mp4";

export const slides = [
  <img src="./assets/images/cartoon_4.jpg" alt="1" />,
  <img src="./assets/images/cartoon_4.jpg" alt="2" />,
  <img src="./assets/images/cartoon_4.jpg" alt="3" />,
  <img src="./assets/images/cartoon_4.jpg" alt="4" />,
];
export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;
  height: auto;
  padding: 20px 60px;
  box-sizing: border-box;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  @media (max-width: 1024px) {
    width: 80%;
    overflow-x: scroll;
    margin: auto auto;
    display: block;
  }
`;
export const WrapperSection = styled.div`
  background: #1a1d2b;

  h3 {
    letter-spacing: 2px;
    margin-top: 5px;
    text-align: center;
    color: white;
    font-size: 22px;
  }
`;
export const RecommendSection = styled.div``;
function App() {
  return (
    <div>
      <Carousel slides={slides} autoplay={true} interval={10000} />
      <WrapperSection>
        <h3>Recommend To Watch</h3>
        <Wrapper>
          <Card logo={logo1} video={video1} />
          <Card logo={logo2} video={video2} />
          <Card logo={logo3} video={video3} />
          <Card logo={logo4} video={video4} />
          <Card logo={logo5} video={video5} />
          <Card logo={logo6} video={video6} />
        </Wrapper>
      </WrapperSection>
    </div>
  );
}

export default App;
