import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ParagrafProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, any>{
    children: ReactNode;
    size: '14px' | '16px' | '18px'

}