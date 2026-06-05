import { aboutValues } from '@/data/siteContent';
import { FadeUp } from '@/components/layout/FadeUp/FadeUp';

import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <FadeUp className={styles.left}>
        <h2 className={styles.title}>
          Una agencia hecha por emprendedores,
          <br />
          <em className={styles.accent}>para emprendedores.</em>
        </h2>
        <p className={styles.story}>
          Nacimos de la frustración de ver agencias que prometían mucho, cobraban aún más, y
          entregaban poco.
          <br />
          <br />
          En Dante somos tres creativos que decidimos cambiar la forma de hacer marketing: con
          calidad, con propósito y sin rollos. Para negocios que quieren una presencia digital
          sólida, sin complicaciones.
        </p>
      </FadeUp>

      <FadeUp className={styles.right} delay={80}>
        {aboutValues.map((value) => (
          <div key={value.number} className={styles.point}>
            <span className={styles.number}>{value.number}</span>
            <div>
              <h4 className={styles.pointTitle}>{value.title}</h4>
              <p className={styles.pointDescription}>{value.description}</p>
            </div>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
