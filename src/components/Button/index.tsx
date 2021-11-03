import { ButtonHTMLAttributes } from 'react'
import {Container} from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({children, ...rest}:ButtonProps){
    return(
        <Container>
            {children}
        </Container>
    )
}