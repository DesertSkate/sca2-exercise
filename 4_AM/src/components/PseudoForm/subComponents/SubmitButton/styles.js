import styles from "styled-components"
import { Flex } from "grid-styled";

export const Container = styles(Flex) `
    display: flex;
    text-align: center;
    align-items: center;
`

export const Button = styles.button `
    background-color: darkred;
    border-color: darkred;
    color: white;
    padding: 6px;
    width: 8vw;
    height: 4vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
    border-radius: 11px;
    font-size: 1.4em;
`