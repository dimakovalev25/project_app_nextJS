import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditeble?: boolean;
    rating: number;
    setRating?: (rating: number) => void;

}