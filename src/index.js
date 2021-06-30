import { useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";
import { md5 } from "pure-md5";
const Animation = (props) => {
  let uniqid =
    "c_" +
    md5(
      Object.keys(props)
        .map((key) => {
          if (key != "children") {
            return key + JSON.stringify(props[key]);
          }
        })
        .join(" ")
    ).substr(0, 8);

  let { children, duration = null, style, animateName = null } = props;
  if (animateName != null) {
    uniqid = animateName;
  }
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  if (duration == null) duration = durationInFrames / fps;
  const currentFrame =
    frame / fps < duration ? frame / fps : duration - 0.00001;
  const convertCss = (cssObject) =>
    typeof cssObject === "string"
      ? cssObject
      : Object.keys(cssObject).reduce((accumulator, key) => {
          const cssKey = key.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`);
          const cssValue = cssObject[key].toString().replace("'", "");
          return `${accumulator}${cssKey}:${cssValue};`;
        }, "");
  return (
    <div>
      <style>
        {animateName == null
          ? `@keyframes ${uniqid} {
        ${Object.keys(props)
          .map((key) => {
            return ["from", "to"].includes(key)
              ? `${key} { ${convertCss(props[key])} }`
              : /^f[0-9]+$/.test(key)
              ? `${key.replace("f", "")}% { ${convertCss(props[key])} }`
              : "";
          })
          .join(" ")}
      }`
          : ""}
      </style>
      <div
        style={{
          ...style,
          animationPlayState: "paused",
          animationName: uniqid,
          animationDelay: `-${currentFrame}s`,
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export { Animation };
