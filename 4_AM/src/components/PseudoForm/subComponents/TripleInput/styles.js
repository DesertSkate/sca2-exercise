import styles from "styled-components"
import {TextInput} from "../TextInput/styles"
import { Flex } from "grid-styled";

export const TriPut = styles(TextInput) `
    margin: 0
`

export const TriContain = styles(Flex) `
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`