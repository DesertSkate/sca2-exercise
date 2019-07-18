import styles from "styled-components"
import { Flex } from "grid-styled";

export const Radio = styles.input `
    background-color: black;
    color: white;
    margin-top: ${props => props.top ? "1vh" : "0"};
    width: 2vw;
    height: 2vh;
`

export const Option = styles.h3 `
    color: black;
    display: inline;
    font-size: 1.3em;
`

export const Container = styles(Flex) `
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`