import styles from "styled-components"

export const Radio = styles.input `
    background-color: black;
    color: white;
    margin-top: ${props => props.top ? "1vh" : "0"};
    width: 3vw;
    height: 3vh;
`

export const Option = styles.h3 `
    color: black;
    display: inline;
    font-size: 1.5em;
`