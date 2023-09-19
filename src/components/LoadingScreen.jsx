import styles from './LoadingScreen.module.css';

function LoadingScreen() {
    return (
        <div className={styles['loading__container']}>
            <div className={styles['piano__keys']}>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['black__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['black__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>

                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['black__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['black__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['black__key'], styles.key].join(' ')}
                ></div>
                <div
                    className={[styles['white__key'], styles.key].join(' ')}
                ></div>
            </div>
            <p>Loading...</p>
        </div>
    );
}

export default LoadingScreen;
