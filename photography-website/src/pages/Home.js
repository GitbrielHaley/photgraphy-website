import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

import natureImage from '../images/nature.jpg';  // Replace with the actual image path
import centerImage from '../images/river.jpg';  // Replace with the actual image path
import rightImage from '../images/nature.jpg';   // Replace with the actual image path

function Home() {
  // Create refs for each panel and overlay
  const leftPanelRef = useRef(null);
  const centerPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftOverlayRef = useRef(null);
  const centerOverlayRef = useRef(null);
  const rightOverlayRef = useRef(null);
  
  // State to track hover and active section
  const [leftHovered, setLeftHovered] = React.useState(false);
  const [centerHovered, setCenterHovered] = React.useState(false);
  const [rightHovered, setRightHovered] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null);  // New state for active section

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleBackClick = () => {
    setActiveSection(null); // Reset to show original content
  };

  // Get the two sections that are not currently active
  const getInactiveSections = () => {
    const sections = ['nature', 'street', 'back'];
    return sections.filter(section => section !== activeSection);
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Transitioning Section */}
      <Box
        sx={{
          position: 'absolute',
          top: activeSection ? '0' : '100vh',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          transition: 'top 1s ease', // 1 second transition for sliding
          zIndex: 20,
        }}
      >
        {/* Navigation Bar */}
        <Box
          sx={{
            height: '10vh',
            backgroundColor: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Space between back and additional buttons
            paddingLeft: '1rem',
            paddingRight: '1rem',
            position: 'relative',
            zIndex: 21,
          }}
        >
          {/* Back Button */}
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              border: '2px solid white',
              '&:hover': {
                backgroundColor: '#333',
                color: '#fff',
              },
            }}
            onClick={handleBackClick}
          >
            Back
          </Button>

          {/* Dynamic Buttons for Inactive Sections */}
          <Box>
            {getInactiveSections().map((section) => (
              <Button
                key={section}
                variant="outlined"
                sx={{
                  color: '#fff',
                  marginLeft: '1rem',
                  border: '2px solid white',
                  '&:hover': {
                    backgroundColor: '#333',
                    color: '#fff',
                  },
                }}
                onClick={() => handleButtonClick(section)}
              >
                {section === 'nature' && 'Nature Shots'}
                {section === 'street' && 'Street Shots'}
                {section === 'back' && 'Back Shots'}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Section Content */}
        <Box sx={{ padding: '2rem', color: '#fff', textAlign: 'center', height: '90vh' }}>
          <Typography variant="h2">
            {activeSection === 'nature' && 'Nature Shots'}
            {activeSection === 'street' && 'Street Shots'}
            {activeSection === 'back' && 'Back Shots'}
          </Typography>
        </Box>
      </Box>

      {/* Top gradient box */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '17vh',
          background: 'linear-gradient(to bottom, black, rgba(0, 0, 0, 0))',
          zIndex: 10,
        }}
      />

      {/* Bottom gradient box */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '17vh',
          background: 'linear-gradient(to top, black, rgba(0, 0, 0, 0))',
          zIndex: 10,
        }}
      />

      {/* Panels */}
      <Box
        sx={{
          position: 'absolute',
          top: activeSection ? '-100vh' : 0,  // Slide panels up when activeSection is set
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          zIndex: 0,
          transition: 'top 1s ease',  // 1 second transition
        }}
      >
        {/* Left Panel */}
        <Box
          ref={leftPanelRef}
          sx={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            transition: 'flex 0.3s ease',
            backgroundColor: '#000',
          }}
        >
          {/* Blurred background image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${natureImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${natureImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: leftHovered ? 'blur(0px)' : 'blur(5px)', // Conditional blur
                transition: 'filter 0.3s ease, transform 0.3s ease',
                backgroundClip: 'padding-box',
                transform: 'scale(1.03)',
              },
            }}
          />

          {/* Semi-transparent black overlay */}
          <Box
            ref={leftOverlayRef}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'opacity 0.3s ease',
              opacity: 1,
            }}
          />

          {/* Button for Left Panel */}
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 4,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                width: '75%',
                border: "2px solid white",
                backgroundColor: 'rgb(0,0,0,0)',
                '&:hover': {
                  backgroundColor: '#333',
                  color: '#fff',
                },
              }}
              onMouseEnter={() => {
                setLeftHovered(true);
                leftOverlayRef.current.style.opacity = 0;
              }}
              onMouseLeave={() => {
                setLeftHovered(false);
                leftOverlayRef.current.style.opacity = 1;
              }}
              onClick={() => handleButtonClick('nature')}
            >
              Nature Shots
            </Button>
          </Box>
        </Box>

        {/* Center Panel */}
        <Box
          ref={centerPanelRef}
          sx={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            transition: 'flex 0.3s ease',
            backgroundColor: '#000',
          }}
        >
          {/* Blurred background image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${centerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${centerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: centerHovered ? 'blur(0px)' : 'blur(5px)', // Conditional blur
                transition: 'filter 0.3s ease, transform 0.3s ease',
                backgroundClip: 'padding-box',
                transform: 'scale(1.03)',
              },
            }}
          />

          <Box
            ref={centerOverlayRef}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'opacity 0.3s ease',
              opacity: 1,
            }}
          />

          {/* Button for Center Panel */}
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 4,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                width: '75%',
                border: "2px solid white",
                backgroundColor: 'rgb(0,0,0,0)',
                '&:hover': {
                  backgroundColor: '#333',
                  color: '#fff',
                },
              }}
              onMouseEnter={() => {
                setCenterHovered(true);
                centerOverlayRef.current.style.opacity = 0;
              }}
              onMouseLeave={() => {
                setCenterHovered(false);
                centerOverlayRef.current.style.opacity = 1;
              }}
              onClick={() => handleButtonClick('street')}
            >
              Street Shots
            </Button>
          </Box>
        </Box>

        {/* Right Panel */}
        <Box
          ref={rightPanelRef}
          sx={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            transition: 'flex 0.3s ease',
            backgroundColor: '#000',
          }}
        >
          {/* Blurred background image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${rightImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${rightImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: rightHovered ? 'blur(0px)' : 'blur(5px)', // Conditional blur
                transition: 'filter 0.3s ease, transform 0.3s ease',
                backgroundClip: 'padding-box',
                transform: 'scale(1.03)',
              },
            }}
          />

          <Box
            ref={rightOverlayRef}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'opacity 0.3s ease',
              opacity: 1,
            }}
          />

          {/* Button for Right Panel */}
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 4,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                width: '75%',
                border: "2px solid white",
                backgroundColor: 'rgb(0,0,0,0)',
                '&:hover': {
                  backgroundColor: '#333',
                  color: '#fff',
                },
              }}
              onMouseEnter={() => {
                setRightHovered(true);
                rightOverlayRef.current.style.opacity = 0;
              }}
              onMouseLeave={() => {
                setRightHovered(false);
                rightOverlayRef.current.style.opacity = 1;
              }}
              onClick={() => handleButtonClick('back')}
            >
              Back Shots
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Title and Subtitle */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 5,
          pointerEvents: 'none', // Ensure hover passes through this section
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Gabriel Haley
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#fff' }}>
          Photographer man
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
