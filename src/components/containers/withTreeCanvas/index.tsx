"use client";

import React, { useEffect, useRef, useState } from "react";

const random = Math.random;

const polar2cart = (x: number, y: number, length: number, angle: number) => {
  return [x + length * Math.cos(angle), y + length * Math.sin(angle)];
};

const r15 = Math.PI / 12;
const r180 = Math.PI;
const r90 = Math.PI / 2;

const WithTreeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [init, setInit] = useState(3);
  const [len, setLen] = useState(5);
  const [stopped, setStopped] = useState(false);
  const intervalRef = useRef<number | null>(null); // Store interval ID to clear later

  const startDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const width = canvas.width;
    const height = canvas.height;

    let stepsArray: Function[] = [];
    let prevStepsArray: Function[] = [];
    let currentIterations = 0;

    const step = (x: number, y: number, rad: number) => {
      const length = random() * len;
      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100) {
        return;
      }

      if (currentIterations <= init || random() > 0.5) {
        stepsArray.push(() => step(nx, ny, rad1));
      }

      if (currentIterations <= init || random() > 0.5) {
        stepsArray.push(() => step(nx, ny, rad2));
      }
    };

    const frame = () => {
      currentIterations += 1;
      prevStepsArray = stepsArray;
      stepsArray = [];

      if (!prevStepsArray.length) {
        setStopped(true);
        return;
      }
      prevStepsArray.forEach((fn) => fn());
    };

    const start = () => {
      setStopped(false);
      currentIterations = 0;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#00000040";
      prevStepsArray = [];

      stepsArray =
        random() < 0.5
          ? [
              () => step(0, random() * height, 0),
              () => step(width, random() * height, r180),
            ]
          : [
              () => step(random() * width, 0, r90),
              () => step(random() * width, height, -r90),
            ];

      intervalRef.current = window.setInterval(frame, 16);
    };

    return start();
  };

  const resetDrawing = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear existing drawing interval
    }
    startDrawing(); // Restart the drawing process
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        resetDrawing(); // Reset drawing on window resize
      }
    };

    handleResize(); // Initial resize on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clean up the interval on unmount
      }
    };
  }, [init, len]);

  return (
    <div>
      <div
        className="tree-canvas fixed top-0 left-0 -z-10 opacity-10 dark:opacity-100"
        style={{ height: "100vh" }}
        onClick={resetDrawing}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%" }}
        ></canvas>
      </div>
    </div>
  );
};

export default WithTreeCanvas;
