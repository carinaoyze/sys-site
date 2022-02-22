import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const MissaoVisaoValores = styled.div`
    width:40%;
`;

export const Missao = styled.div`
    text-align: justify;
    font-family: 'Fira Sans';
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 4rem;
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
`;

export const Lista = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListaUm = styled.li`
    font-size: 1.6rem;
    line-height: 2.5rem;
    list-style-type: none;
    margin-left: 2rem;
`;

export const BordaTexto = styled.div`
    width: 60%;
    margin-left: 10rem;
    margin-right: 4rem;
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
