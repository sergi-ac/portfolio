import Link from 'next/link';
import styles from './Header.module.css';
export default function Header() {
    return (
        <>
            <header className={styles.h}>
                <Link href="/"><h1>SERGIO</h1></Link> <Link href="/"><h1>ÁVILA</h1></Link>
            </header>
            <header className={styles.v}>
                <a href="#start"><h1>SERGIO ÁVILA</h1></a>
            </header>
        </>
    );
}