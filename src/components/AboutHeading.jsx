import { Char, Phrase } from "animatedtxt";
import React from "react";

const AboutHeading = () => {
  return (
    <div className="m-5">
      <div className="mt-2">
        <Phrase
          margin={8}
          size={70}
          cubicBezier={[0.68, 0.04, 0.45, 0.98]}
          color="#ccf381"
          font="basic-medium"
          delay={1}
        >
          <Char char="P" />
          <Char char="A" />
          <Char char="S" />
          <Char char="S" />
          <Char char="I" />
          <Char char="O" />
          <Char char="N" />
        </Phrase>
      </div>
      <div className="mt-2">
        <Phrase
          margin={8}
          size={70}
          cubicBezier={[0.68, 0.04, 0.45, 0.98]}
          color="#ffffff"
          font="basic-medium"
          delay={1.5}
        >
          <Char char="F" />
          <Char char="U" />
          <Char char="E" />
          <Char char="L" />
          <Char char="S" />
        </Phrase>
      </div>
      <div className="mt-2">
        <Phrase
          margin={8}
          size={70}
          cubicBezier={[0.68, 0.04, 0.45, 0.98]}
          color="#ffffff"
          font="basic-medium"
          delay={2}
        >
          <Char char="P" />
          <Char char="U" />
          <Char char="R" />
          <Char char="P" />
          <Char char="O" />
          <Char char="S" />
          <Char char="E" />
        </Phrase>
      </div>
    </div>
  );
};

export default AboutHeading;
