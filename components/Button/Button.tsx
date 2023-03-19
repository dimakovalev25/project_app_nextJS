import {ButtonProps} from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg'

export const Button = ({appearence, arrow='none', children, className, ...props}:ButtonProps): JSX.Element => {
    return (
    <button
    className={cn(styles.button, {
        [styles.primary]: appearence == 'primary',
        [styles.ghost]: appearence == 'ghost',
    })}
    {...props}
    >{children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
            [styles.right]: arrow == 'right',

        })}>
        <ArrowIcon></ArrowIcon>
        {/*<img src={'./arrow.svg'}></img>*/}
        </span>}
    </button>
    )
}
