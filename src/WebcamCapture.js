import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import ToggleCam from "./ToggleCam";

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
  border-radius: 3vw;
  width: 80vw;
  height: calc(80vw * 0.63);
`;

const WebcamCapture = ({ className }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [deviceId, setDeviceId] = useState("default");

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
          videoConstraints={{ deviceId }}
        />
        <CardBorder onClick={capture} />
      </CamWrap>
      <ToggleCam onSelectDevice={(v) => setDeviceId(v)} />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img alt="pic" src={imgSrc} />}
    </>
  );
};

export default WebcamCapture;
