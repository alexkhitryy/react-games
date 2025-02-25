import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
}
h2{
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333;

}
h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a{
    text-decoration: none;
}
img{
    display: block
}
input{
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
    h2{
        font-size: 2.5rem;
    }
}
`;

export default GlobalStyles;
