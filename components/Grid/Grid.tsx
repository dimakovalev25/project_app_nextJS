import styles from './Grid.module.css'

const Grid = (): JSX.Element => {
    return (
    <div className={styles.grid}>
        <div className={styles.header}>header</div>
        <div className={styles.art}>art</div>
        <div className={styles.body}>body</div>
        <div className={styles.sidebar}>sidebar</div>
        <div className={styles.footer}>footer</div>

    </div>
    )
}
export default  Grid;