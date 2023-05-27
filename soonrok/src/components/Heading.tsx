/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ReactNode } from 'react';

interface HeadingProps {
    children: ReactNode;
}


const Heading = ({children}: HeadingProps) => {
    return <h1 css = {css ({
        color: "white",
        fontSize: 60
    })}>{children}</h1>
}

export default Heading;

