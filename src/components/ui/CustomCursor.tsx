"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Independent drops state array to allow continuous multi-clicking
  const [inkDrops, setInkDrops] = useState<{ id: number }[]>([]);
  // We use a ref to prevent stale closures inside setTimeout
  const dropsRef = useRef<{ id: number }[]>([]);

  useEffect(() => {
    // Only mount on devices with a fine pointer (desktops/laptops)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName.toLowerCase();
        
        // Smart hiding logic over interactive text elements
        const isTextInput = (tag === 'input' && e.target.getAttribute('type') !== 'button' && e.target.getAttribute('type') !== 'submit') || tag === 'textarea';
        const isContentEditable = e.target.getAttribute('contenteditable') === 'true';
        if (isTextInput || isContentEditable) {
           setIsVisible(false);
           setIsHovering(false);
           return;
        }
        
        // Smart hover logic for clickable elements
        const isClickable = e.target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer');
        setIsHovering(!!isClickable);
      }
      
      setIsVisible(true);
    };

    const onMouseDown = () => {
      setIsClicked(true);
      
      // Spawn a completely independent particle drop on every single click
      const newId = Date.now() + Math.random();
      const newDrop = { id: newId };
      
      dropsRef.current = [...dropsRef.current, newDrop];
      setInkDrops(dropsRef.current);
      
      // Auto-purge memory after animation fully finishes identically across rapid clicks
      setTimeout(() => {
        dropsRef.current = dropsRef.current.filter((d) => d.id !== newId);
        setInkDrops(dropsRef.current);
      }, 1200); 
    };
    
    const onMouseUp = () => setIsClicked(false);
    
    // Hide when mouse leaves the viewport
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-99999"
      animate={{
        x: position.x,
        y: position.y,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0, // perfect 0-latency tracking
      }}
    >
      <div className="relative">
        {/* Fountain Pen Vector SVG */}
        <motion.div
          animate={{
            scale: isClicked ? [1, 0.98, 0.98] : 1, 
            rotate: isClicked ? -4 : isHovering ? -12 : 0, // Tilts aggressively backwards to prep for strike
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{ originX: 0, originY: 0 }} // Rotates flawlessly locked onto the pixel tip
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512" style={{ overflow: "visible" }}>
            <defs>
              {/* Dynamic Nib-Split Mask */}
              {/* Uses a highly precise 6-unit slice at the absolute tip so it perfectly mimics the tines separating natively without deleting the nib itself! */}
              <mask id="nib-split-mask">
                <rect x="0" y="0" width="512" height="512" fill="white" />
                <motion.polygon
                  initial={false}
                  animate={{
                    points: isClicked ? "256,430 253,520 259,520" : "256,430 255.8,520 256.2,520"
                  }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  fill="black"
                />
              </mask>
            </defs>

            {/* Rotated Group - Points the tip exactly to 0,0 locally */}
            <g transform="translate(-75, -75) rotate(135 256 256)">
              {/* Shadow Base */}
              <motion.g 
                fill="#000000" 
                opacity="0.6"
                animate={{
                  x: isHovering ? -20 : -10, // Shadow pulls further away when hovering (lifting up)
                  y: isHovering ? 25 : 15
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <path d="M384.164,290.844c9.641-13.688,12.75-30.953,8.469-47.141l-43.734-135.516H163.117l-43.75,135.516c-4.281,16.188-1.172,33.453,8.469,47.141l104.609,148.344v23.688c-6.359,5.031-10.422,12.813-10.422,21.563c0,15.219,12.328,27.563,27.563,27.563v-48.844v-6.281V264.266c-10.375-2.828-18-12.297-18-23.563c0-13.484,10.922-24.422,24.422-24.422c13.484,0,24.422,10.938,24.422,24.422c0,11.266-7.641,20.734-18,23.547v192.625v6.281V512c15.219,0,27.563-12.344,27.563-27.563c0-8.75-4.078-16.531-10.438-21.563v-23.688L384.164,290.844z"/>
                <rect x="157.086" width="197.844" height="88.047"/>
              </motion.g>

              {/* Masked Main Pen Body - The tines now separate delicately without vanishing the tip */}
              <g mask="url(#nib-split-mask)">
                <motion.g 
                  fill="#ffffff" 
                  animate={{ 
                    scaleX: isClicked ? 1.04 : 1 // additional widening for extra opening effect
                  }}
                  style={{ originX: "256px", originY: "512px" }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <path d="M384.164,290.844c9.641-13.688,12.75-30.953,8.469-47.141l-43.734-135.516H163.117l-43.75,135.516c-4.281,16.188-1.172,33.453,8.469,47.141l104.609,148.344v23.688c-6.359,5.031-10.422,12.813-10.422,21.563c0,15.219,12.328,27.563,27.563,27.563v-48.844v-6.281V264.266c-10.375-2.828-18-12.297-18-23.563c0-13.484,10.922-24.422,24.422-24.422c13.484,0,24.422,10.938,24.422,24.422c0,11.266-7.641,20.734-18,23.547v192.625v6.281V512c15.219,0,27.563-12.344,27.563-27.563c0-8.75-4.078-16.531-10.438-21.563v-23.688L384.164,290.844z"/>
                  <rect x="157.086" width="197.844" height="88.047"/>
                </motion.g>
              </g>
            </g>
            
            {/* Hover Ink Aura - Throbs when hovering over clickable elements */}
            <AnimatePresence>
              {isHovering && !isClicked && (
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0.6, 1.2, 0.6], 
                    opacity: [0.4, 0.9, 0.4] 
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  cx="5" cy="5" r="8" fill="#db520d" // Offsets slightly so it balloons perfectly from the nib
                />
              )}
            </AnimatePresence>

            {/* Seamless HD Teardrop Ink Animation! Continuous array maps unique particles */}
            {inkDrops.map((drop) => (
              <g key={drop.id}>
                {/* The teardrop - Starts small at the tip, elongates, detaches, and splats downwards */}
                <motion.path
                  initial={{ scale: 0, opacity: 1, y: 0 }}
                  animate={{ 
                    scale: [0, 1.4, 0.9], 
                    opacity: [1, 1, 0], 
                    y: [0, 50, 400], // Smooth fluid fall tracking downward gravity
                    scaleY: [1, 1.8, 0.4] // Elongates heavily while falling, squishes flat at the bottom!
                  }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  d="M 0 0 C 35 45, 35 90, 0 90 C -35 90, -35 45, 0 0" 
                  fill="#db520d" 
                  style={{ originX: 0, originY: 0 }} 
                />
                
                {/* The main Ink Puddle - Expands exactly where the teardrop lands! */}
                <motion.ellipse
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 0.2, 2.5], 
                    opacity: [0, 0, 0.8, 0] // Only appears as drops hit the ground
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  cx="0" cy="380" rx="45" ry="18" fill="#db520d"
                />
                
                {/* A smaller trailing splatter droplet that lands beside the main puddle */}
                <motion.circle
                  initial={{ scale: 0, opacity: 1, y: 0, x: 0 }}
                  animate={{ 
                    scale: [0, 0.6, 0.8, 0],
                    y: [0, 40, 200, 380], 
                    x: [0, -10, -30, -40] // Splatters elegantly left!
                  }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                  cx="0" cy="0" r="16" fill="#db520d" opacity="0.9"
                />
                
                <motion.ellipse
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 0.1, 1.2], 
                    opacity: [0, 0, 0.6, 0] 
                  }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
                  cx="-40" cy="390" rx="20" ry="10" fill="#db520d"
                />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
