import styled from 'styled-components'
import { motion } from 'framer-motion';

// Global styles
export const GlobalContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
`;

export const HeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23333" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
  opacity: 0.1;
  z-index: 1;
`;

export const AnimatedHeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23333" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
  opacity: 0.1;
  z-index: 1;
`;

export const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 2;
  position: relative;
  max-width: 800px;
  padding: 0 20px;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e74c3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

export const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.8;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const MainContent = styled.div`
  background: #fff;
  position: relative;
  z-index: 10;
`;

export const Section = styled(motion.section)`
  padding: 100px 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
`;

export const WhiteSectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  // color: white;
  letter-spacing: -0.02em;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

export const ContactCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: #e74c3c;
  }
`;

export const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  color: white;
`;

export const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

export const ContactText = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const GiftCardSection = styled(Section)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`;

export const GiftCardContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const GiftCardPrice = styled(motion.div)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #e74c3c, #f39c12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GiftCardDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

export const FAQSection = styled(Section)`
  background: #f8f9fa;
`;

export const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e9ecef;
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 25px 30px;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8f9fa;
  }
  
  span {
    font-size: 1.5rem;
    color: #e74c3c;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
`;

export const FAQAnswer = styled(motion.div)<{ $isOpen: boolean }>`
  padding: 0 30px;
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
  padding-bottom: ${({ $isOpen }) => $isOpen ? '25px' : '0'};
`;

export const Footer = styled.footer`
  background: #1a1a1a;
  color: white;
  text-align: center;
  padding: 40px 20px;
  font-size: 0.9rem;
  opacity: 0.7;
`;

// Screen overlay components
export const ScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 2000;
  overflow-y: auto;
`;

export const ScreenContent = styled.div`
  min-height: 100vh;
  padding: 100px 20px 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CloseButton = styled(motion.button)`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(231, 76, 60, 0.3);
  transition: all 0.3s ease;
  z-index: 2001;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 40px rgba(231, 76, 60, 0.4);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;