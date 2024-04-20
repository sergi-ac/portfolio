import Link from 'next/link';
export default function Header() {
    return (
        <>
            <header className="header-desktop">
                <Link href="/">
                    <h1>SERGIO</h1>
                </Link>
                <Link href="/">
                    <h1>ÁVILA</h1>
                </Link>
            </header>
            <header className="header-mobile">
                <Link href="/">
                    <h1>SERGIO ÁVILA</h1>
                </Link>
            </header>
        </>
    );
}