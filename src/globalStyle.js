import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    font-family: 'Source sans pro', sans-serif;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;

    @media screen and (max-width: 991px){
        padding: 0 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59f7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '15px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all .4s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59f7')};
    }
    
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export default GlobalStyle;