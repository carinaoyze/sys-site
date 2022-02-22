import styled from 'styled-components';

export const RodapeEmbaixo = styled.footer`
   position: absolute;
   
    background-color: #010d27;
    width: 100%;
    /* min-height: calc(100vh - 85rem); */
    height: 7rem;
    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction: column;
        width: 100%;
    }
`;