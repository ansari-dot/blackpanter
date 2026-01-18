import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCards = () => {
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

  const cardVariants = {
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

  const floatingVariants = {
    animate: {
      y: [0, -5, 0],
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "PowerTech's preventive maintenance program saved us from a catastrophic failure during peak production. Their team is unmatched.",
      title: "Operations Director",
      company: "Regional Utility Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      animationDirection: 50, // scroll up
      delay: 0.1,
      gradient: "linear-gradient(to right, #F06123, #FF8803)"
    },
    {
      id: 2,
      text: "Their rapid response during our emergency saved millions in potential downtime. Exceptional service quality and technical expertise.",
      title: "Facility Manager",
      company: "Manufacturing Corp.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      animationDirection: -50, // scroll down
      delay: 0.25,
      gradient: "linear-gradient(to right, #FF8803, #F06123)"
    },
    {
      id: 3,
      text: "Professional, reliable, and always available when we need them. Their proactive approach has saved us significant downtime.",
      title: "Chief Engineer",
      company: "Data Center Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      animationDirection: 50, // scroll up
      delay: 0.4,
      gradient: "linear-gradient(to right, #F06123, #FF8803, #F06123)"
    }
  ];

  // Styles
  const containerStyle = {
    display: 'grid',
    alignSelf: 'stretch',
    marginBottom: '40px',
    padding: '0 16px',
    gap: '24px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    minHeight: '320px',
    padding: '32px',
    borderRadius: '16px',
    border: '2px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const accentLineStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    transformOrigin: 'left'
  };

  const quoteIconContainerStyle = {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(to bottom right, rgba(240, 97, 35, 0.1), rgba(255, 136, 3, 0.1))',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    transition: 'transform 0.6s ease'
  };

  const quoteIconStyle = {
    width: '24px',
    height: '24px',
    color: '#F06123'
  };

  const testimonialTextStyle = {
    color: '#374151',
    fontSize: '18px',
    marginBottom: '24px',
    flex: 1,
    lineHeight: '1.75',
    fontFamily: 'Inter, sans-serif'
  };

  const starContainerStyle = {
    display: 'flex',
    gap: '4px',
    marginBottom: '16px'
  };

  const starStyle = {
    width: '20px',
    height: '20px',
    color: '#FF8803'
  };

  const authorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: 'auto'
  };

  const authorImageStyle = {
    width: '48px',
    height: '48px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid #f3f4f6'
  };

  const authorNameStyle = {
    color: '#070B15',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
    margin: 0
  };

  const authorCompanyStyle = {
    color: '#6b7280',
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    margin: 0
  };

  const paginationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '81px'
  };

  const paginationButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid #F06123',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const heartButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'linear-gradient(to right, #F06123, #FF8803)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(240, 97, 35, 0.2)'
  };

  const heartIconStyle = {
    width: '24px',
    height: '24px',
    color: '#F06123'
  };

  const chevronIconStyle = {
    width: '20px',
    height: '20px',
    color: '#F06123'
  };

  // Responsive styles
  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
    
    .testimonials-grid {
      grid-template-columns: 1fr !important;
      padding: 0 16px !important;
      gap: 24px !important;
    }
    
    @media (min-width: 768px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        padding: 0 32px !important;
        gap: 32px !important;
      }
    }
    
    @media (min-width: 1024px) {
      .testimonials-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        padding: 0 48px !important;
        gap: 32px !important;
      }
    }
    
    @media (max-width: 768px) {
      .testimonial-text {
        font-size: 16px !important;
      }
      
      .testimonial-card {
        padding: 24px !important;
        min-height: 280px !important;
      }
    }
    
    @media (max-width: 480px) {
      .testimonial-text {
        font-size: 15px !important;
        line-height: 1.6 !important;
      }
      
      .testimonial-card {
        padding: 20px !important;
        min-height: 260px !important;
      }
      
      .quote-icon-container {
        width: 40px !important;
        height: 40px !important;
      }
      
      .quote-icon {
        width: 20px !important;
        height: 20px !important;
      }
    }
    
    .quote-icon-container:hover {
      transform: rotate(360deg);
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      
      <div className="testimonials-grid" style={containerStyle}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            style={cardStyle}
            variants={isMobile ? mobileVariants : cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02, 
              borderColor: 'rgba(240, 97, 35, 0.3)', 
              boxShadow: "0px 15px 35px rgba(240, 97, 35, 0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Top Accent Line */}
            <motion.div 
              style={{...accentLineStyle, background: testimonial.gradient}}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : 0.2 }}
            />
            
            {/* Quote Icon */}
            <motion.div 
              className="quote-icon-container" 
              style={quoteIconContainerStyle}
              variants={pulseVariants}
              animate="animate"
            >
              <Quote style={quoteIconStyle} />
            </motion.div>
            
            {/* Testimonial Text */}
            <motion.p 
              className="testimonial-text" 
              style={testimonialTextStyle}
              variants={floatingVariants}
              animate="animate"
            >
              {testimonial.text}
            </motion.p>
            
            {/* Star Rating */}
            <motion.div 
              style={starContainerStyle}
              variants={floatingVariants}
              animate="animate"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star
                    style={starStyle} 
                    fill="currentColor"
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Author Info */}
            <motion.div 
              style={authorContainerStyle}
              variants={floatingVariants}
              animate="animate"
            >
              <motion.img
                src={testimonial.image}
                alt={testimonial.title}
                style={authorImageStyle}
                whileHover={{ scale: 1.1, borderColor: '#F06123' }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <motion.h4 
                  style={authorNameStyle}
                  whileHover={{ color: '#F06123' }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.title}
                </motion.h4>
                <motion.p style={authorCompanyStyle}>
                  {testimonial.company}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <motion.div 
        style={paginationContainerStyle}
        initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: isMobile ? 0.4 : 0.6 }}
      >
        <motion.button
          style={paginationButtonStyle}
          whileHover={{ scale: 1.1, borderColor: '#F06123' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => console.log('Previous testimonials')}
        >
          <ChevronLeft style={chevronIconStyle} />
        </motion.button>
        
        <motion.button
          style={heartButtonStyle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => console.log('Like testimonials')}
        >
          <Heart style={heartIconStyle} />
        </motion.button>
        
        <motion.button
          style={paginationButtonStyle}
          whileHover={{ scale: 1.1, borderColor: '#F06123' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => console.log('Next testimonials')}
        >
          <ChevronRight style={chevronIconStyle} />
        </motion.button>
      </motion.div>
    </>
  );
};

export default TestimonialsCards;