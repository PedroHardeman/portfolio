import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100%;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
`

export const PageContainer = styled.main`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const ContentWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
`

export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 70px; /* Account for fixed topbar */
`

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  text-align: center;
  margin-bottom: 3rem;
`

export const SectionContent = styled.div`
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .tech-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 1rem;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
    }
  }

  .about-content {
    background: rgba(255, 255, 255, 0.8);
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;

    p {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.7;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 1rem;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .project-tags {
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
    }
  }
`
