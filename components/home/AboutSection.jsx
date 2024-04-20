import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="anchor-about" className={`half-width ${styles.about}`}>
          <div className={styles.text}>
            <h2>Freelance photographer specialised in product and interior design photography.</h2>
            <p>Send a message to <a href="mailto:sergio@sergioavila.work">sergio@sergioavila.work</a></p>
          </div>
        </section>
    );
}