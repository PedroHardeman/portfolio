import styled from 'styled-components'

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  padding: 3rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const GameCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`

export const TargetTime = styled.div`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 2rem;
  
  span {
    font-weight: bold;
    color: #1f2937;
    font-size: 2rem;
  }
`

export const Timer = styled.div<{ $isRunning: boolean }>`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: ${({ $isRunning }) => $isRunning ? '#ef4444' : '#1f2937'};
  margin: 2rem 0;
  padding: 1rem;
  background: ${({ $isRunning }) => $isRunning ? 'rgba(239, 68, 68, 0.1)' : 'rgba(31, 41, 55, 0.05)'};
  border-radius: 1rem;
  border: 2px solid ${({ $isRunning }) => $isRunning ? '#ef4444' : '#e5e7eb'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const StartButton = styled.button`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const StopButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
  animation: pulse 1s infinite;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
    animation: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`

export const ResultCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  h3 {
    color: #1f2937;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin: 0.5rem 0;
    color: #4b5563;
    
    strong {
      color: #1f2937;
    }
  }
`

export const GameStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const BestScore = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #1f2937;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  p {
    color: #10b981;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const ScoreDisplay = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #1f2937;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    text-align: center;
  }
  
  p {
    color: #4b5563;
    margin: 0.5rem 0;
    text-align: center;
  }
`

export const ResetButton = styled.button`
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #4b5563, #374151);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`
