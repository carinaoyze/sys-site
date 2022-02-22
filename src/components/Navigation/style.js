import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
    }
`

export const ModoEscuro = styled.div`
    display: flex;
    align-items: center;
`
export const Menu = styled.div`
    margin-right: 5rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 35%;
    @media screen and (max-width: 600px) {
        text-align: center;
        width: 65%;
        flex-wrap: nowrap;
    }
    
`
export const Links = styled.a`
    text-decoration: none;
    color: var(--blue);
    font-family: 'Fira Mono', 'Open Sans';
    font-size: 1.8rem;
    @media screen and (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
    }
    
`
export const Barra = styled.p`
    color: var(--blue);
    font-family: 'Fira Mono', 'Open Sans';
    font-size: 1.8rem;
    
`;

