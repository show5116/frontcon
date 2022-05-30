import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>frontCon</h1>
        <nav>
          <ul>
            <li>Guide</li>
            <li>Icon</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section>
          1
        </section>
        <section>
          2
        </section>
        <section>
          3
        </section>
      </main>

      <footer>
        <p>Copyright 2022. FrontCon Co. all rights reserved.</p>
      </footer>
    </div>
  )
}
