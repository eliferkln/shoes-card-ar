import React from "react";
import "@google/model-viewer/lib/model-viewer";
import styles from "./Model.module.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}
function index() {
  const iosSrc = "/glb/Nike_Illusion.usdz";
  return (
    <>
      <div className={styles["model"]}></div>
      <model-viewer
        id="first"
        src="/glb/nike_illusion.glb"
        ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity="0"
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
        style={{
          display: "flex",
          alignItems: "center",
          width: "15em",
          height: "15em",
          backgroundColor: "transparent",
          margin: "auto",
        }}
      >
        <div className="poster" slot="poster">
          <img className="pre-prompt" src="/glb/prompt.svg" />
        </div>
      </model-viewer>
    </>
  );
}

export default index;
