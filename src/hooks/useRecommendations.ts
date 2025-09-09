export interface Recommendation {
  id: string
  content: string
}

export const useRecommendations = () => {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      content: 'If you’re looking for a skilled, adaptable frontend developer who can deliver results and make your team stronger, Pedro’s your guy.'
    },
    {
      id: '2',
      content: 'From day one, he impressed me with his mix of technical skill and adaptability.'
    },
    {
      id: '3',
      content: 'Pedro is a great frontend developer with an amazing habit of noticing issues, getting the right info to solve those problems, and then getting to strong solutions in an efficient way.'
    },
    {
      id: '4',
      content: 'He has a deep knowledge of the whole Frontend ecosystem.'
    },
  ]

  return {
    recommendations
  }
}
