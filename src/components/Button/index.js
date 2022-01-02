import React from "react";
import { Btn } from "./styles";
import PropTypes from 'prop-types'

export const Button = ({children, backgroundColor, color, borderColor, border, borderWidth, onClick}) => {
    return(
        <Btn
        backgroundColor={backgroundColor}
        border={border}
        color={color}
        borderColor={borderColor}
        borderWidth={borderWidth}
        onClick={onClick}
        >{children}</Btn>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    border: PropTypes.string,
    borderWidth: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps={
    backgroundColor: "#000080",
    color: "#fff",
    borderColor: "#FF4500",
    onClick: () => {}
}