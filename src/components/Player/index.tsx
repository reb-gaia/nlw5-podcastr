import styles from './styles.module.scss'

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.png" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.png" alt="Embaralhar" />
          </button>

          <button type="button">
            <img src="/play_previous.png" alt="Tocar anterior" />
          </button>

          <button type="button" className={styles.playButton}>
            <img src="/play.png" alt="Tocar" />
          </button>

          <button type="button">
            <img src="/play_next.png" alt="Tocar próxima" />
          </button>

          <button type="button">
            <img src="/repeat.png" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}