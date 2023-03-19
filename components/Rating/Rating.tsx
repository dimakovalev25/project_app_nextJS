import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from './star.svg'

export const Rating = ({isEditeble = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])



    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editebel]: isEditeble
                    })}
                    onMouseEnter={() => changeDisplay(i+1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={()  => onClick(i + 1)}
                    tabIndex={isEditeble ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditeble && handleSpace(i+1, e)}

                />


            );
        });
        setRatingArray(updatedArray);
    };


    const handleSpace = (i : number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return
        }
        setRating(i)
    }
    const changeDisplay = (i: number) => {
        if(!isEditeble) {
            return
        }
        constructRating(i)
    }
    const onClick = (i: number) => {
        if(!isEditeble || !setRating) {
            return
        }
        setRating(i)
    }


    return (

        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}

        </div>

    )
}
