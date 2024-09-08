"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Set a timeout to automatically hide the loader after a set amount of time
    const timer = setTimeout(() => {
      setLoadingComplete(true); // Show the main app after loader completes
    }, 4000); // Duration matches the animation time
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
   
      {!loadingComplete && (
        <motion.div
          initial={{ scale: 1, y: 0 }} // Start fully visible
          animate={{ scale: 0.2, y: "-100vh" }} // Move up to cover the viewport height
          transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }} // Adjust delay and duration
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#1A1F24",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start with small scale and opacity
            animate={{ opacity: 1, scale: 1 }} // Animate to full scale and opacity
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80%",
            }}
          >
           <div className="preloader-image-wrapper">
           <img
              src="/logo.webp" // Replace with your logo path
              alt="Company Logo"
              height={"100px"}
           
            />
           </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Loader;
