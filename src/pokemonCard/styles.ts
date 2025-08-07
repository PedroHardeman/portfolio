import styled from 'styled-components'

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin: 1rem;
  text-align: center;
  min-width: 210px;
  min-height: 220px;
`

export const Figure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const PokemonImage = styled.img`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const FigCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PokemonName = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #374151;
  margin: 0;
  text-transform: capitalize;
`

export const PokemonNumber = styled.h6`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
`

export const ErrorTitle = styled.h4`
  font-size: 1.25rem;
  color: #dc2626;
  margin: 0;
`

export const ErrorMessage = styled.h6`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`
