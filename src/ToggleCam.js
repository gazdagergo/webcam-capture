import React, { useState, useEffect } from "react";

const ToggleCam = ({ onSelectDevice }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((d) => {
      setDevices(d.filter(({ kind }) => kind === "videoinput"));
    });
  }, []);

  const handleSelecChange = ({ target: { value } }) => {
    onSelectDevice(value);
  };

  console.log(devices);

  return (
    <select onChange={handleSelecChange}>
      {devices.map(({ label, deviceId }) => (
        <option value={deviceId}>{label}</option>
      ))}
    </select>
  );
};

export default ToggleCam;
