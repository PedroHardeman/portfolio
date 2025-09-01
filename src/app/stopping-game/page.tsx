'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { MainContainer, ContentWrapper, Title, Subtitle } from '@/app/styles'
import {
  GameContainer,
  GameCard,
  TargetTime,
  Timer,
  StartButton,
  StopButton,
  ResultCard,
  ScoreDisplay,
  BestScore,
  GameStats,
  ResetButton
} from './styles'

export default function StoppingGame() {
  const [gameState, setGameState] = useState<'waiting' | 'running' | 'finished'>('waiting')
  const [targetTime, setTargetTime] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [clickTime, setClickTime] = useState<number>(0)
  const [difference, setDifference] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(Infinity)
  const [totalGames, setTotalGames] = useState<number>(0)
  const [averageScore, setAverageScore] = useState<number>(0)
  const [scores, setScores] = useState<number[]>([])

  // Generate a random target time between 3 and 8 seconds
  const generateTargetTime = useCallback(() => {
    return Math.random() * 5000 + 3000 // 3000ms to 8000ms (3-8 seconds)
  }, [])

  // Start the game
  const startGame = useCallback(() => {
    const newTargetTime = generateTargetTime()
    setTargetTime(newTargetTime)
    setCurrentTime(0)
    setClickTime(0)
    setDifference(0)
    setGameState('running')
  }, [generateTargetTime])

  // Stop the game and calculate results
  const stopGame = useCallback(() => {
    if (gameState !== 'running') return

    const newDifference = Math.abs(currentTime - targetTime)
    setClickTime(currentTime)
    setDifference(newDifference)
    setGameState('finished')

    // Update best score
    if (newDifference < bestScore) {
      setBestScore(newDifference)
    }

    // Update game statistics
    const newTotalGames = totalGames + 1
    const newScores = [...scores, newDifference]
    const newAverageScore = newScores.reduce((sum, score) => sum + score, 0) / newScores.length

    setTotalGames(newTotalGames)
    setScores(newScores)
    setAverageScore(newAverageScore)
  }, [gameState, currentTime, targetTime, bestScore, totalGames, scores])

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (gameState === 'running') {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 10) // Update every 10ms for millisecond precision
      }, 10)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameState])

  // Format time display (seconds.milliseconds)
  const formatTime = (time: number): string => {
    const seconds = Math.floor(time / 1000)
    const milliseconds = Math.floor((time % 1000) / 10)
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}`
  }

  // Get score color based on accuracy
  const getScoreColor = (diff: number): string => {
    if (diff < 100) return '#10b981' // Green for very close
    if (diff < 300) return '#f59e0b' // Yellow for close
    if (diff < 500) return '#f97316' // Orange for moderate
    return '#ef4444' // Red for far off
  }

  // Get score message based on accuracy
  const getScoreMessage = (diff: number): string => {
    if (diff < 50) return 'Perfect! 🎯'
    if (diff < 100) return 'Excellent! 🏆'
    if (diff < 200) return 'Great job! 👍'
    if (diff < 300) return 'Good! 👌'
    if (diff < 500) return 'Not bad! 🤔'
    return 'Keep practicing! 💪'
  }

  return (
    <MainContainer>
      <ContentWrapper>
        <Title>Stopping Game</Title>
        <Subtitle>Click the button when you think the timer matches the target time!</Subtitle>

        <GameContainer>
          <GameCard>
            <TargetTime>
              Target: <span>{formatTime(targetTime)}</span>
            </TargetTime>

            <Timer $isRunning={gameState === 'running'}>
              {formatTime(currentTime)}
            </Timer>

            {gameState === 'waiting' && (
              <StartButton onClick={startGame}>
                Start Game
              </StartButton>
            )}

            {gameState === 'running' && (
              <StopButton onClick={stopGame}>
                STOP NOW!
              </StopButton>
            )}

            {gameState === 'finished' && (
              <>
                <ResultCard>
                  <h3>Your Result</h3>
                  <p>You clicked at: <strong>{formatTime(clickTime)}</strong></p>
                  <p>Target was: <strong>{formatTime(targetTime)}</strong></p>
                  <p>Difference: <strong style={{ color: getScoreColor(difference) }}>
                    {formatTime(difference)}
                  </strong></p>
                  <p style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: getScoreColor(difference)
                  }}>
                    {getScoreMessage(difference)}
                  </p>
                </ResultCard>

                <StartButton onClick={startGame}>
                  Play Again
                </StartButton>
              </>
            )}
          </GameCard>

          <GameStats>
            <BestScore>
              <h3>Best Score</h3>
              <p>{bestScore === Infinity ? 'No games yet' : formatTime(bestScore)}</p>
            </BestScore>

            <ScoreDisplay>
              <h3>Game Statistics</h3>
              <p>Games Played: {totalGames}</p>
              <p>Average Score: {totalGames > 0 ? formatTime(averageScore) : 'N/A'}</p>
            </ScoreDisplay>

            {totalGames > 0 && (
              <ResetButton onClick={() => {
                setBestScore(Infinity)
                setTotalGames(0)
                setAverageScore(0)
                setScores([])
                setGameState('waiting')
              }}>
                Reset Stats
              </ResetButton>
            )}
          </GameStats>
        </GameContainer>
      </ContentWrapper>
    </MainContainer>
  )
}
