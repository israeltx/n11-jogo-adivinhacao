import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

import styles from "./app.module.css"

export default function App() {

  function handleRestartGame() {
    alert('Reiniciar o jogo')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame}/>
        <Tip tip="Umas das linguagens de programação dinâmica mais utilizadas"/>
      </main>
    </div>
  )
}