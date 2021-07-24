import React from "react";
// import previewVideo from "../data.js";
import styled from "styled-components";

export default function Card({ logo, video }) {
  return (
    <PreviewVideoWrapper>
      <div className="border"></div>
      <img src={logo} alt="logo" />
      <video
        loop
        preload="none"
        muted
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        src={video}
      ></video>
    </PreviewVideoWrapper>
  );
}

const PreviewVideoWrapper = styled.div`
  --border-radius: 0.7rem;
  --transition-time: 0.3s;

  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 65%);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0 16px 17px -5px #000000;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);

  :hover {
    transform: scale(1.1);

    .border {
      border: 3px solid rgba(255, 255, 255, 0.7);
    }
    video {
      opacity: 100%;
      z-index: 11;
    }
  }
  .border {
    position: absolute;
    top: 0;
    width: 100%;
    border: 3px solid #42444f;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-clip: border-box;
    z-index: 10;
    transition: all var(--transition-time);
    pointer-events: none;
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    pointer-events: none;
    height: -webkit-fill-Available;
  }
  video {
    position: absolute;
    top: 0;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
  }
`;
