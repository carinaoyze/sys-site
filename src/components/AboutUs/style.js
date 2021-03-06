import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`
export const MissaoVisaoValores = styled.div`

    width:40%;

    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
    }
`;

export const Missao = styled.div`
    text-align: justify;
    font-family: 'Fira Sans';
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 2rem;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;

export const MissaoImagem = styled.div`
    
    color: #0D114F;
    
`;

export const MissaoTitulo = styled.h1`
    font-size: 1.5rem;
    font-family: 'Fira Sans';
    text-transform: uppercase;
    text-align: center;
    margin-right: 1rem;
`;

export const MissaoTexto = styled.p`
    font-size: 1.6rem;
    line-height: 2.5rem;
    padding: 3.5rem;
    margin-top: 3rem;
    @media screen and (max-width: 600px) {
        padding: 0;
        width: 100%;
        text-align: justify;
    }
`;

export const Lista = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const ListaUm = styled.li`
    font-size: 1.6rem;
    line-height: 2.5rem;
    list-style-type: none;
    margin-left: 2rem;
    @media screen and (max-width: 600px) {
        text-align: center;
        margin:0;
    }
`;

export const BordaTexto = styled.div`
    width: 60%;
    margin-left: 10rem;
    margin-right: 4rem;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const BordaCima = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Borda = styled.div`
    width: 4rem;
`;


export const TextoBorda = styled.div`
    padding: 0.5rem;
`;


export const TextoBordaH1 = styled.h1`
    text-align: center;
    font-family: 'Fira Sans';
    font-weight: bold;
    color: var(--blue);
    font-size: 2rem;
    text-transform: uppercase;
`;


export const TextoBordaP = styled.p`
    text-align: justify;
    font-family:'Fira Sans';
    font-size: 1.6rem;
    line-height: 2.5rem;
    padding: 0.5rem 3.8rem;
    color:var(--blue);
`;
export const BordaBaixo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const EquipeTitulo = styled.h1`
    font-family: 'Fira Code';
    color: var(--blue);
    font-size: 1.7rem;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: 600px) {
        font-size: 1.9rem;
        text-align: center;
    }
`;

export const EquipeTexto = styled.p`
    font-family: 'Fira Code';
    color: var(--blue);
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-left: 3rem;
    @media screen and (max-width: 600px) {
        font-size: 1.8rem;
        text-align: center;
        margin:0;
    }

`;

export const Socios = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const Equipe = styled.div`
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const Colaboradores = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;

export const ColaboradoresTitulo = styled.h2`
    font-family: 'Fira Mono';
    color: var(--blue);
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-left: 4rem;
    color: #feb40e;
    @media screen and (max-width: 600px) {
        font-size: 1.8rem;
        text-align: center;
        margin:0;
    }
`;