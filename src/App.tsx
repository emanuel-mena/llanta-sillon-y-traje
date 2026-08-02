import Flipbook from './Flipbook'
import './App.css'

function App() {
  return (
    <main className="book-page">
      <header className="book-page__header">
        <h1>Llanta, sillón y traje</h1>
        <p>Explora el libro página por página.</p>
      </header>

      <section className="book-page__viewer" aria-label="Visor del libro">
        <Flipbook src="/Cuentos_Imagen_Polisemica.pdf" height="min(75vh, 820px)" />
      </section>

      <footer className="book-page__footer">
        <p>
          Visor creado con DearFlip Lite 1.7.3, bajo licencia CC BY-NC-ND 4.0
          (uso personal y no comercial).
        </p>
      </footer>
    </main>
  )
}

export default App
