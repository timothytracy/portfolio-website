'use client'
import './RotatingCubeArray.css'
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const RotatingCubeArray = ({ dimension = 3 }) => {
  const [hue, setHue] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [flashingCubes, setFlashingCubes] = useState(new Set());
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const totalCubes = dimension * dimension * dimension;

  useEffect(() => {
    const hueInterval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360);
    }, 50);

    const flashInterval = setInterval(() => {
      if (!exploded) {
        const newFlashingCubes = new Set(flashingCubes);
        for (let i = 0; i < 3; i++) {
          const randomCube = Math.floor(Math.random() * totalCubes);
          if (newFlashingCubes.has(randomCube)) {
            newFlashingCubes.delete(randomCube);
          } else {
            newFlashingCubes.add(randomCube);
          }
        }
        setFlashingCubes(newFlashingCubes);
      }
    }, 300);

    const rotationSpeed = 0.5; // degrees per frame
    const rotationInterval = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + rotationSpeed) % 360,
        y: (prev.y + rotationSpeed) % 360,
        z: (prev.z + rotationSpeed) % 360
      }));
    }, 16); // approximately 60 FPS

    return () => {
      clearInterval(hueInterval);
      clearInterval(flashInterval);
      clearInterval(rotationInterval);
    };
  }, [exploded, flashingCubes, totalCubes]);

  const handleMouseEnter = useCallback(() => {
    setExploded(true);
    setFlashingCubes(new Set());
  }, []);

  const handleMouseLeave = useCallback(() => {
    setExploded(false);
  }, []);

  const randomOffsets = useMemo(() => {
    return Array(totalCubes).fill().map(() => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
      rotateX: Math.random() * 2 - 1,
      rotateY: Math.random() * 2 - 1,
      rotateZ: Math.random() * 2 - 1,
      animationDelay: Math.random(),
    }));
  }, [totalCubes]);

  return (
    <div 
      className="scene" 
      style={{ 
        filter: `hue-rotate(${hue}deg)`,
        '--cube-array-dimension': dimension 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`cube-array ${exploded ? 'exploded' : ''}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`
        }}
      >
        {[...Array(dimension)].map((_, z) => (
          [...Array(dimension)].map((_, y) => (
            [...Array(dimension)].map((_, x) => {
              const index = x + y * dimension + z * dimension * dimension;
              const offset = randomOffsets[index];
              const isFlashing = flashingCubes.has(index);
              return (
                <div
                  key={`${x}-${y}-${z}`}
                  className={`cube ${isFlashing ? 'flashing' : ''}`}
                  style={{
                    '--x': x - (dimension - 1) / 2,
                    '--y': y - (dimension - 1) / 2,
                    '--z': z - (dimension - 1) / 2,
                    '--offset-x': offset.x,
                    '--offset-y': offset.y,
                    '--offset-z': offset.z,
                    '--rotate-x': offset.rotateX,
                    '--rotate-y': offset.rotateY,
                    '--rotate-z': offset.rotateZ,
                    '--animation-delay': offset.animationDelay,
                  }}
                >
                  {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
                    <div key={face} className={`face ${face}`} />
                  ))}
                </div>
              );
            })
          ))
        ))}
      </div>
    </div>
  );
};


export default RotatingCubeArray;