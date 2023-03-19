import {ParagrafProps} from './Paragraf.props'
import styles from './Paragraf.module.css'



export const Paragraf = ({size, children}: ParagrafProps): JSX.Element => {

    switch (size) {
        case "14px":
            return <p className={styles.size14}>{children}</p>;
        case "16px":
            return <p className={styles.size16}>{children}</p>;
        case "18px":
            return <p className={styles.size18}>{children}</p>;
        default:
            return <></>;

    }
}
