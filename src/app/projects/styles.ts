import styled from 'styled-components'

export const SectionContent = styled.div`
  padding: 0 3rem;
  margin: 2rem auto;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  a {
    text-decoration: none;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`

export const ProjectDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: #e0e7ff;
    color: #3730a3;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`
