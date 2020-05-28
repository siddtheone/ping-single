import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --blue: hsl(223, 87%, 63%);
    --lightblue: hsl(223, 100%, 88%);
    --lightred: hsl(354, 100%, 66%);
    --gray: hsl(0, 0%, 59%);
    --darkblue: hsl(209, 33%, 12%);
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: 'Libre Franklin', sans-serif;
    font-size: 20px;
    padding-top: 80px;
    color: var(--gray);
}

img {
    max-width: 100%;
}

.app__container {
    width: min(650px, 90%);
    margin: 0 auto;
    text-align: center;
}
`;

const Heading = styled.h1`
    font-weight: normal;
    font-size: 2.83rem;
    margin: 0;
    margin-top: .9em;
    strong {
        color: var(--darkblue);
    }
`;

const Paragraph = styled.p`
    color: ${({error}) =>  error ? `var(--lightred)` : `var(--darkblue)`};
    font-style: ${({error}) =>  error ? 'italic' : 'none'};
    font-size: ${({error}) =>  error ? '.8rem' : 'inherit'};
    @media (min-width: 600px) {
        text-align: ${({error}) =>  error ? 'left' : 'inherit'};
        padding-left: ${({error}) =>  error ? '2em' : 'inherit'};
    }
`;

const Row = styled.div`
    padding: 0  1.5em;
    margin: 1.5em 0;
    @media (min-width: 600px) {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledInput = styled.input`
    padding: 1.5em 2em;
    border: 1px solid ${({error}) =>  error ? `var(--lightred)` : `var(--lightblue)`};
    border-radius: 100px;
    width: 100%;
    outline: none;
    transition: 0.5s;
    color:  ${({error}) =>  error ? `var(--lightred)` : `var(--darkblue)`};
`;

const StyledButton = styled.button`
    padding: 1.5em 1em;
    background: var(--blue);
    color: white;
    border-radius: 100px;
    width: 100%;
    outline: none;
    border: 0;
    transition: all 0.5s;
    font-weight: bold;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        background: var(--darkblue);
    }
    @media (min-width: 600px) {
        width: 30%;
        align-self: flex-start;
    }
`;

const StyledFormField = styled.div`
    margin-bottom: 20px;
    @media (min-width: 600px) {
        margin-right: min(1%, 1em);
        width: 65%;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin: 5em 0 1em;

    button {
        border: 0;
        outline: none;
        border: 1px solid var(--lightblue);
        border-radius: 100%;
        padding: 0.5em;
        background: white;
        font-size: 1.5rem;
        color: var(--blue);
        line-height: 0;
        transition: all .5s;
        cursor: pointer;
        &:hover {
            color: white;
            background: var(--blue);
            transform: rotate(360deg);
        }
    }

    button + button {
        margin-left: 10px;
    }
`;

export {
    Footer,
    StyledFormField,
    StyledButton,
    StyledInput,
    Row,
    Paragraph,
    Heading,
    GlobalStyles,
}