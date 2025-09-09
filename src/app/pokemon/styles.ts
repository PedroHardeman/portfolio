import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TechExplanation = styled.div`
  max-width: 720px;
  margin-top: 24px;
  padding: 16px 20px;
  border-radius: 12px;
  background: #f7f7f8;
  color: #1a1a1a;
  line-height: 1.6;
  font-size: 0.95rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);

  strong {
    font-weight: 700;
  }

  ul {
    margin: 8px 0 0;
    padding-left: 1.25rem;
  }

  li {
    margin: 6px 0;
  }
`