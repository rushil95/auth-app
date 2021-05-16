import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import styled from 'styled-components/macro'
import LogoLight from '../assets/logo-light.svg'
import LogoDark from '../assets/logo-dark.svg'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 475px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

const LoginCard = styled.div`
  ${'' /* border : 1px solid #BDBDBD;
border-radius : 24px; */}
  padding : 24px;
`
const Footer = styled.div``

const Logo = styled.img``

export default function Login() {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <LoginCard>
        <Logo src={theme.id === 'light' ? LogoLight : LogoDark} />
      </LoginCard>
      <Footer />
    </Wrapper>
  )
}
