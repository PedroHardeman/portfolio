'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MainContainer, TechExplanation } from './styles'
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
    <MainContainer>
      <PokemonCard
        isLoading={isLoading}
        data={pokemon}
        error={error}
      />
      <ButtonGroup handleSetId={setId} />
      <TechExplanation>
        <strong>Tech overview</strong>
        <ul>
          <li>Next.js App Router with a client component for interactive state.</li>
          <li>TanStack Query handles fetch, cache, and loading/error states.</li>
          <li>Keyed caching via <code>[&apos;pokemon&apos;, id]</code> prevents duplicate requests.</li>
          <li>Local <code>id</code> state selects the Pokémon; updates trigger refetch.</li>
          <li>UI: <code>PokemonCard</code> renders data; <code>ButtonGroup</code> increments/decrements id.</li>
          <li>Styling with styled-components for scoped, themeable styles.</li>
        </ul>
      </TechExplanation>
    </MainContainer>
  )
}
