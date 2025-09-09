import styled from 'styled-components'

export const SectionContent = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    background: none;
    box-shadow: none;
    padding: 2rem;
    margin: 0 auto;
  }
`
export const SectionParagraph = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 2rem auto;
  text-align: center;

  @media (max-width: 768px) {
    width: auto;
  }
`

export const SectionRecommendation = styled.div`
  background: #494949;
  padding: 3rem 4rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  p {
   color: white;
  }
`