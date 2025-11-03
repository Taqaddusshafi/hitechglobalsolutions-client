import { motion } from 'framer-motion';

export function AnimatedLogo() {
  const hitechColor = "#0063cd";
  const solutionColor = "#444444";
  const letters = ["h", "ı", "t", "e", "c", "h"]; // Using dotless i (ı)

  // Different starting positions for each letter
  const startPositions = [
    { x: -200, y: -150, rotate: -45 },
    { x: 150, y: -200, rotate: 90 },
    { x: -180, y: 180, rotate: -90 },
    { x: 200, y: 150, rotate: 45 },
    { x: -150, y: -180, rotate: 135 },
    { x: 180, y: 200, rotate: -135 },
  ];

  const brandColor = hitechColor;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-1 justify-center">
        <div className="flex items-end relative">
          {letters.map((letter, index) => {
            const delay = index * 0.2;
            const startPos = startPositions[index];

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{
                  x: startPos.x,
                  y: startPos.y,
                  rotate: startPos.rotate,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: delay,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  fontSize: "142px",
                  lineHeight: 0.6,
                  color: brandColor,
                }}
              >
                {letter}

                {/* Decorative particles bursting from the dot position of "i" */}
                {index === 1 && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute w-2.5 h-2.5 rounded-full"
                        style={{
                          background: brandColor,
                          left: "40%",
                          top: "0px",
                          marginLeft: "-5px",
                        }}
                        initial={{
                          x: 0,
                          y: 0,
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          x:
                            Math.cos(i * 45 * (Math.PI / 180)) *
                            50,
                          y:
                            Math.sin(i * 45 * (Math.PI / 180)) *
                            50,
                          scale: [0, 1.5, 0.5],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          delay: delay + 0.9,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}

                    {/* The dot of "i" appears after particles burst */}
                    <motion.div
                      className="absolute"
                      style={{
                        fontFamily: "'Fredoka', sans-serif",
                        fontWeight: 600,
                        fontSize: "142px",
                        lineHeight: 1,
                        color: brandColor,
                        left: "5%",
                        top: "-80px",
                        transform: "translateX(-50%)",
                      }}
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        delay: delay + 1.5,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      ·
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: letters.length * 0.1 + 1.5,
            duration: 0.6,
            type: "spring",
            stiffness: 150,
          }}
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 400,
            fontSize: "54px",
            color: solutionColor,
          }}
        >
          Global Solutions
        </motion.div>
      </div>
    </div>
  );
}
