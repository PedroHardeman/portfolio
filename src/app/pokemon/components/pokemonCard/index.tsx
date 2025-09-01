import * as React from "react"
import { Card, Figure, PokemonImage, FigCaption, PokemonName, PokemonNumber, ErrorTitle, ErrorMessage } from './styles'

interface PokemonCardProps {
  data?: any;
  isLoading?: boolean;
  error?: any;
}

export default function PokemonCard({ data, isLoading, error }: PokemonCardProps) {
  if (isLoading === true) {
    return <Card />
  }

  if (error) {
    return (
      <Card>
        <Figure>
          <PokemonImage
            width="100"
            height="100"
            src="https://ui.dev/images/courses/pokemon-unknown.png"
            alt="Unknown Pokemon Image"
          />
          <FigCaption>
            <ErrorTitle>Oops.</ErrorTitle>
            <ErrorMessage>{error}</ErrorMessage>
          </FigCaption>
        </Figure>
      </Card>
    )
  }

  return (
    <Card>
      <Figure>
        <PokemonImage
          width="150"
          height="150"
          src={data?.sprites?.front_default}
          alt={data.name}
        />
        <FigCaption>
          <PokemonName>{data.name}</PokemonName>
          <PokemonNumber>No. {data.id}</PokemonNumber>
        </FigCaption>
      </Figure>
    </Card>
  );
}
