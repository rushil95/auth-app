import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin : 0;
    padding: 0;
    box-sizing : border-box;
}

html,body{
    height : 100%;
}

body{
    background: ${(props) => {
      return props.theme.colors.background
    }};
    color : ${({ theme }) => theme.colors.font};

}
`
