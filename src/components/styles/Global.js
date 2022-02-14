import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    *{
        box-sizing: border-box;
        overflow-x: hidden;
    }

    body{
        background: ${({
          theme: {
            colors: { body },
          },
        }) => body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        margin: 0;
    }

    p{
        opacity: .6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }

    input{
        padding: 10px;
        border-radius: 12px;
        border: none;
        margin:  20px 0;
        margin-right: 20px;
    }
`;

export default GlobalStyles;
