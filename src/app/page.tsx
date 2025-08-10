'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import PokemonCard from '../pokemonCard'
import ButtonGroup from '../buttonGroup'
import Topbar from '../topbar'
import { MainContainer, ContentWrapper, Title, Subtitle } from './styles'

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
        <Topbar />
        <ContentWrapper>
          <Title>Hello there!</Title>
          <Subtitle>Please hire me</Subtitle>
          <PokemonCard
            isLoading={isLoading}
            data={pokemon}
            error={error}
          />
          <ButtonGroup handleSetId={setId} />
        </ContentWrapper>
      </MainContainer>
    </>
  )
}