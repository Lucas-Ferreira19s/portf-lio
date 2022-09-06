import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        
        &::-webkit-scrollbar {
            width: 0.6rem;
            background-color: #2B2E41;
            border: 1px solid #08090C;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #F20212;
            border-radius: 0.5rem;
        }
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: #212437;
    }
`;
