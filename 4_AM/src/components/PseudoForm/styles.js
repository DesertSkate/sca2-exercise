import styles from "styled-components"
import { Flex } from "grid-styled";

export const Container = styles(Flex) `
    display: flex;
    width: 100vw;
    height: 85vh;
    background-color: papayawhip;
    flex-flow: column wrap;
    align-items: center;
`