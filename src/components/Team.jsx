import React from 'react';
import { motion } from 'framer-motion';

const MeetOurExperts = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const expertVariants = {
    initial: { y: 80, opacity: 0, scale: 0.9 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Individual card variants for staggered scroll animations
  const cardVariants = {
    initial: { y: 60, opacity: 0, scale: 0.9 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Lighter animation for mobile
  const mobileVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Experts data
  const experts = [
    {
      id: 1,
      name: "Robert Chen",
      title: "Co-Founder, Chief Battery Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      title: "Co-Founder, Battery Systems Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Senior Battery Technician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  // Styles
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f9fafb',
    padding: '80px 0',
    marginBottom: '80px',
    gap: '50px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
    padding: '0 16px',
    maxWidth: '100%'
  };

  const titleWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const titleStyle = {
    color: '#383A3C',
    fontSize: '33px',
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    margin: 0,
    lineHeight: '1.3'
  };

  const subtitleStyle = {
    color: '#6b7280',
    fontSize: '19px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    lineHeight: '1.6'
  };

  const cardsContainerStyle = {
    alignSelf: 'stretch',
    paddingBottom: '1px'
  };

  const gridStyle = {
    display: 'grid',
    alignSelf: 'stretch',
    padding: '0 16px',
    gap: '24px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const expertCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto'
  };

  const imageWrapperStyle = {
    backgroundColor: '#f3f4f6',
    borderRadius: '24px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '320px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
  };

  const imageStyle = {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    transition: 'all 0.5s ease',
    display: 'block'
  };

  const infoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '24px',
    width: '100%',
    maxWidth: '320px'
  };

  const nameStyle = {
    color: '#070B15',
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '4px',
    fontFamily: 'Poppins, sans-serif',
    transition: 'color 0.3s ease',
    margin: '0 0 4px 0'
  };

  const positionStyle = {
    color: '#6b7280',
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    textAlign: 'center'
  };

  // Responsive styles
  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
    
    .experts-grid {
      grid-template-columns: 1fr !important;
      padding: 0 16px !important;
      gap: 24px !important;
    }
    
    @media (min-width: 768px) {
      .experts-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        padding: 0 32px !important;
        gap: 32px !important;
      }
    }
    
    @media (min-width: 1024px) {
      .experts-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        padding: 0 48px !important;
        gap: 40px !important;
      }
    }
    
    .expert-card:hover .expert-image-wrapper {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .expert-card:hover .expert-image {
      transform: scale(1.05);
    }
    
    .expert-card:hover .expert-name {
      color: #F06123;
    }
    
    @media (max-width: 1024px) {
      .expert-title {
        font-size: 33px !important;
      }
      .expert-subtitle {
        font-size: 19px !important;
      }
    }
    
    @media (max-width: 640px) {
      .expert-title {
        font-size: 24px !important;
      }
      .expert-subtitle {
        font-size: 16px !important;
      }
      .expert-image {
        height: 320px !important;
      }
    }
    
    @media (max-width: 480px) {
      .expert-title {
        font-size: 20px !important;
      }
      .expert-subtitle {
        font-size: 15px !important;
      }
      .expert-image {
        height: 280px !important;
      }
      .expert-name {
        font-size: 18px !important;
      }
      .expert-position {
        font-size: 14px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      
      <motion.div 
        style={sectionStyle}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div 
          style={headerContainerStyle}
          variants={isMobile ? mobileVariants : headerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div style={titleWrapperStyle}>
            <motion.span className="expert-title" style={titleStyle}>
              Meet Our Experts
            </motion.span>
          </motion.div>
          <motion.span className="expert-subtitle" style={subtitleStyle}>
            Certified engineers and technicians dedicated to your power reliability.
          </motion.span>
        </motion.div>
        
        <div style={cardsContainerStyle}>
          <div className="experts-grid" style={gridStyle}>
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                className="expert-card"
                style={expertCardStyle}
                variants={isMobile ? mobileVariants : cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="expert-image-wrapper" 
                  style={imageWrapperStyle}
                  variants={floatingVariants}
                  animate="animate"
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="expert-image"
                    style={imageStyle}
                  />
                </motion.div>
                <motion.div style={infoContainerStyle}>
                  <motion.h3 
                    className="expert-name" 
                    style={nameStyle}
                    whileHover={{ color: '#F06123' }}
                    transition={{ duration: 0.3 }}
                  >
                    {expert.name}
                  </motion.h3>
                  <motion.p 
                    className="expert-position" 
                    style={positionStyle}
                  >
                    {expert.title}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MeetOurExperts;