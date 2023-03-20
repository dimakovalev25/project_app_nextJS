import {HeaderProps} from "@/layout/Header/Header.props";
import styles from './Header.module.css'


export const Header = ({children}: HeaderProps): JSX.Element => {
    return (
        <div className={styles.header}>
            {children}
            Header
        </div>
    )
}
