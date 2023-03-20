import {FooterProps} from "@/layout/Footer/Footer.props";
import styles from './Footer.module.css'

export const Footer = ({children}: FooterProps): JSX.Element => {
    return (
        <div className={styles.footer}>
            Footer
            {children}
        </div>
    )
}
