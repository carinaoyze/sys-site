import normalize  from 'react-style-reset/string';
import reset from 'react-style-reset/string';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${ normalize };
    ${reset};
`;

// export const theme = {
//     colors:{
//         black: "#0D114F",
//         white: "#F9F9F9",
//         blue: "#010d27",
//         yellow: "#feb40e",
//         background: "#F9F9F9",
//         overlay: "#040911",
//         iconDetails: "#A5B0C1"
//     }
// }