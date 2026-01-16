"use client";

import { useEffect, useState } from "react";

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

interface FallingLight {
    id: number;
    x: number;
    duration: number;
    delay: number;
    size: number;
    color: string;
    tailLength: number;
}

export default function SparkleParticles() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const [fallingLights, setFallingLights] = useState<FallingLight[]>([]);

    useEffect(() => {
        const colors = [
            "rgba(212, 168, 83, 0.9)",   // Gold
            "rgba(167, 139, 219, 0.9)",  // Lavender
            "rgba(255, 255, 255, 0.9)",  // White
            "rgba(255, 230, 153, 0.9)",  // Light gold
        ];

        // Generate sparkles
        const newSparkles: Sparkle[] = [];
        for (let i = 0; i < 40; i++) {
            newSparkles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
        setSparkles(newSparkles);

        // Generate falling lights
        const newFallingLights: FallingLight[] = [];
        for (let i = 0; i < 25; i++) {
            newFallingLights.push({
                id: i,
                x: Math.random() * 100,
                duration: Math.random() * 4 + 3, // 3-7 seconds to fall
                delay: Math.random() * 8, // Random delay up to 8s
                size: Math.random() * 4 + 2, // 2-6px
                color: colors[Math.floor(Math.random() * colors.length)],
                tailLength: Math.random() * 40 + 20, // 20-60px tail
            });
        }
        setFallingLights(newFallingLights);
    }, []);

    return (
        <div className="sparkle-container">
            {/* Static sparkle particles */}
            {sparkles.map((sparkle) => (
                <div
                    key={`sparkle-${sparkle.id}`}
                    className="sparkle-particle"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        backgroundColor: sparkle.color,
                        boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}, 0 0 ${sparkle.size * 4}px ${sparkle.color}`,
                        animationDuration: `${sparkle.duration}s`,
                        animationDelay: `${sparkle.delay}s`,
                    }}
                />
            ))}

            {/* Falling light particles */}
            {fallingLights.map((light) => (
                <div
                    key={`falling-${light.id}`}
                    className="falling-light"
                    style={{
                        left: `${light.x}%`,
                        animationDuration: `${light.duration}s`,
                        animationDelay: `${light.delay}s`,
                    }}
                >
                    {/* Light head (glowing orb) */}
                    <div
                        className="light-head"
                        style={{
                            width: `${light.size}px`,
                            height: `${light.size}px`,
                            backgroundColor: light.color,
                            boxShadow: `
                                0 0 ${light.size * 2}px ${light.color},
                                0 0 ${light.size * 4}px ${light.color},
                                0 0 ${light.size * 6}px ${light.color}
                            `,
                        }}
                    />
                    {/* Light tail */}
                    <div
                        className="light-tail"
                        style={{
                            height: `${light.tailLength}px`,
                            background: `linear-gradient(to top, transparent, ${light.color})`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
