/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ReactNode } from 'react';

interface ParagraphProps {
    children: ReactNode;
}


const Paragraph = ({children}: ParagraphProps) => {
    return <h1 css = {css ({
        color: "white",
        fontSize: "24px",
        lineHeight: "210%"
    })}>{children}</h1>
}

export default Paragraph;

