import React from "react";
import {Inp, Lab, Container} from './styles'

export const Input = ({type, name, label, className, onChange, placeholder}) => {
    return(
        <Container>
            <Lab>{label}</Lab>
            <Inp type={type} name={name} className={className} onChange={onChange} placeholder={placeholder}></Inp>
        </Container>
    )
}
