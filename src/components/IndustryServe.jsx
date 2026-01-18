import React from 'react';

export default function IndustriesWeServe() {
  // Responsive state
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15a419d1-2be2-4333-8990-996a37095d41",
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50482ea8-4300-4e7e-ab52-0e921a7cb314",
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14182c43-5a06-40d5-9c75-9637e00a6ae2",
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1404ec7-8574-439c-aa25-2ad784ee120f",
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d311456-ac78-4ba5-8821-acddd1a4d26e"
  ];

  const styles = {
    section: {
      padding: isMobile ? '60px 15px 50px 15px' : '96px 20px 80px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#ffffff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? '40px' : '80px'
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      textAlign: 'center'
    },
    labelWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '8px'
    },
    line: {
      height: '2px',
      width: '48px',
      background: 'linear-gradient(to right, transparent, #F06123)'
    },
    lineReverse: {
      height: '2px',
      width: '48px',
      background: 'linear-gradient(to left, transparent, #F06123)'
    },
    label: {
      color: '#F06123',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1.5px'
    },
    title: {
      fontSize: isMobile ? '28px' : '42px',
      fontWeight: '700',
      color: '#383A3C',
      margin: '0',
      letterSpacing: '-0.5px',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: isMobile ? '16px' : '20px',
      color: '#6b6b6b',
      lineHeight: '1.7',
      margin: '0',
      maxWidth: '680px',
      padding: isMobile ? '0 10px' : '0'
    },
    carouselContainer: {
      width: '100%',
      height: isMobile ? '100px' : '140px',
      background: 'linear-gradient(to right, #f9fafb, #ffffff, #f9fafb)',
      borderRadius: isMobile ? '12px' : '16px',
      position: 'relative',
      overflow: 'hidden'
    },
    fadeLeft: {
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '128px',
      background: 'linear-gradient(to right, #f9fafb, transparent)',
      zIndex: '10',
      pointerEvents: 'none'
    },
    fadeRight: {
      position: 'absolute',
      right: '0',
      top: '0',
      bottom: '0',
      width: '128px',
      background: 'linear-gradient(to left, #f9fafb, transparent)',
      zIndex: '10',
      pointerEvents: 'none'
    },
    scrollTrack: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      gap: '24px',
      padding: '0 20px',
      animation: 'scroll 30s linear infinite'
    },
    logoCard: {
      backgroundColor: '#ffffff',
      width: isMobile ? '150px' : '200px',
      minWidth: isMobile ? '150px' : '200px',
      height: isMobile ? '80px' : '120px',
      borderRadius: isMobile ? '12px' : '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
      border: '2px solid #f3f4f6',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    logoImage: {
      maxWidth: isMobile ? '100px' : '140px',
      maxHeight: isMobile ? '40px' : '60px',
      objectFit: 'contain',
      filter: 'grayscale(100%)',
      transition: 'all 0.3s ease'
    },
    keyframes: `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.labelWrapper}>
              <div style={styles.line}></div>
              <span style={styles.label}>Our Clients</span>
              <div style={styles.lineReverse}></div>
            </div>
            
            <h2 style={styles.title}>Industries We Serve</h2>
            
            <p style={styles.subtitle}>
              Providing critical battery maintenance across diverse sectors requiring reliable power systems.
            </p>
          </div>

          {/* Logo Carousel */}
          <div style={styles.carouselContainer}>
            {/* Fade edges */}
            <div style={styles.fadeLeft}></div>
            <div style={styles.fadeRight}></div>

            {/* Scrolling logos */}
            <div style={styles.scrollTrack}>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div 
                  key={`logo-${index}`}
                  style={styles.logoCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(240, 97, 35, 0.3)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.borderColor = '#f3f4f6';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'grayscale(100%)';
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Company logo ${index + 1}`}
                    style={styles.logoImage}
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div 
                  key={`logo-duplicate-${index}`}
                  style={styles.logoCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(240, 97, 35, 0.3)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.borderColor = '#f3f4f6';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'grayscale(100%)';
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Company logo ${index + 1}`}
                    style={styles.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}