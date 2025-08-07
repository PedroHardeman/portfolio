import { ButtonContainer, Button } from './styles'

interface ButtonGroupProps {
  handleSetId: (id: number | ((id: number) => number)) => void;
}

export default function ButtonGroup({ handleSetId }: ButtonGroupProps) {
  const handlePrevious = () => handleSetId((id) => id > 1 ? id - 1 : id)
  const handleNext = () => handleSetId((id) => id + 1)

  return (
    <ButtonContainer>
      <Button name="previous" onClick={handlePrevious}>
        ←
      </Button>
      <Button name="next" onClick={handleNext}>
        →
      </Button>
    </ButtonContainer>
  )
}
