/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}


const Button = ({children}: ButtonProps) => {
    return <button css = {css ({
        backgroundColor: "#fff",
        color: "#6f6f6f",
        borderRadius: "25px",
        border: "none",
        fontSize: "24px",
        fontFamily: "maruburi",
        height: "50px",
        width: "180px"
    })}>{children}</button>
}

export default Button;

