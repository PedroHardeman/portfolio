import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GallerySection = styled(motion.section)`
  background: #f8f9fa;
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

export const GalleryTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

export const GalleryItem = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border-color: #e74c3c;
  }
`;

export const GalleryImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 12px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }
  
  ${GalleryItem}:hover &::before {
    left: 100%;
  }
`;

export const GalleryDescription = styled.h3`
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 1.3rem;
`;

export const GalleryText = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
`;

export const GalleryIntro = styled(motion.p)`
  color: #666;
  line-height: 1.7;
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 50px;
`;