import React from "react";

export default function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.8)",
        left: 0,
      }}
      hidden={!visible}
    >
      <div
        className="spinner-border text-success"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          left: "50%",
          right: "50%",
          bottom: "50%",
          position: "absolute",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
