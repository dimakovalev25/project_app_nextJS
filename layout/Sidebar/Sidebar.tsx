import {BodyProps} from "@/layout/Body/Body.props";
import styles from './Sidebar.module.css'


export const Sidebar = ({children}: BodyProps): JSX.Element => {
    return (
    <div className={styles.sidebar}>
        Sidebar
    </div>
    )
}
