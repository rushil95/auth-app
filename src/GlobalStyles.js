import { createGlobalStyle } from "styled-components";

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
      return props.theme.colors.background;
    }};
    color : ${({ theme }) => theme.colors.font};
   
}

body,input,textarea, button{
    font-family : 'Noto Sans', sans-serif;
    font-size : 16px;
}

a{
    color : #2D9CDB;
    cursor:pointer;
}

a:hover{
    text-decoration: underline;
}
`;
