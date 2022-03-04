import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;  
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
`

export default HeaderWrapper