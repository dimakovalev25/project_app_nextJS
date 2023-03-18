import {ButtonProps} from "@/components/Button/Button.props";
import styles from './Button.module.css'
import cn from 'classnames'

const Button = ({appearence, children}:ButtonProps): JSX.Element => {
    return (
    <button
    className={cn(styles.button, {
        [styles.primary]: appearence == 'primary',
        [styles.ghost]: appearence == 'ghost',
    })}
    >{children}</button>
    )
}
export default  Button;