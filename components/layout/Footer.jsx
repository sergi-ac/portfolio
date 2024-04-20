import styles from './Footer.module.css';
export default function Footer() {
    return (
        <>
            <footer className={styles.h}>
          <a href="#anchor-about">About</a>
          <a href="http://www.instagram.com/sergioavila.work">Instagram</a>
          <a href="https://www.linkedin.com/in/sergiac/">LinkedIn</a>
          <a href="https://www.behance.net/sergi-ac">Behance</a>
          <a href="mailto:sergio@sergioavila.work">Contact</a>
        </footer>
        <footer className={styles.v}>
          <a href="#anchor-about">INFO</a>
          <a href="http://www.instagram.com/sergioavila.work">IG</a>
          <a href="https://www.linkedin.com/in/sergiac/">IN</a>
          <a href="https://www.behance.net/sergi-ac">BE</a>
          <a href="mailto:sergio@sergioavila.work">MAIL</a>
        </footer>
        </>
    );
}