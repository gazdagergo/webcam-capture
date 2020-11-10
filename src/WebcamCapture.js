import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const CamWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBorder = styled.div`
  position: absolute;
  border: 2px solid #ffffffcc;
  box-shadow: 0 0 34px 0 black;
  border-radius: 4%;
  width: 80vw;
  height: calc(80vw * 0.63);
  max-width: 600px;
  max-height: calc(600px * 0.63);
  padding: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #ffffff22;
  }
`;

const Img = styled.img`
  transform: scaleX(-1);
`;

const WebcamCapture = ({ className }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <CamWrap>
        <Webcam
          style={{ width: "100vw" }}
          audio={false}
          mirrored
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <CardBorder onClick={capture}>
          kattints a keretbe a fotózáshoz
        </CardBorder>
      </CamWrap>
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <Img alt="pic" src={imgSrc} />}
    </>
  );
};

export default WebcamCapture;
