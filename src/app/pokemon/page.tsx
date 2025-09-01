'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MainContainer } from './styles'
import PokemonCard from './components/pokemonCard'
import ButtonGroup from './components/buttonGroup'

export default function Home() {
  const [id, setId] = useState(1)
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
  })

  return (
    <>
      <MainContainer>
        <PokemonCard
          isLoading={isLoading}
          data={pokemon}
          error={error}
        />
        <ButtonGroup handleSetId={setId} />
      </MainContainer>
    </>
  )
}
