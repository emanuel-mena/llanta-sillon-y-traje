import Flipbook from './Flipbook'
import './App.css'

const pdfPath = '/Cuentos_Imagen_Polisemica.pdf'

const contributors = [
  { name: 'Jhon Doe', role: 'Idea & palabras', href: 'https://www.linkedin.com/' },
  { name: 'Jhon Doe', role: 'Mirada & montaje', href: 'https://www.linkedin.com/' },
  { name: 'Jhon Doe', role: 'Diseño & código', href: 'https://www.linkedin.com/' },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↘</span>
}

function App() {
  return (
    <main className="book-page">
      <nav className="topbar" aria-label="Navegación principal">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">LST <span>—</span> 01</a>
        <div className="topbar__links">
          <a href="#libro">El libro</a>
          <a href="#creditos">Créditos</a>
          <a className="topbar__github" href="https://github.com/placeholder" target="_blank" rel="noreferrer">
            <span aria-hidden="true">⌘</span> Repositorio
          </a>
        </div>
      </nav>

      <section className="hero" id="inicio" aria-labelledby="page-title">
        <div className="hero__copy">
          <p className="eyebrow">Un ensayo visual · edición digital</p>
          <h1 id="page-title">Llanta,<br /><em>sillón</em><br />y traje.</h1>
          <p className="hero__lede">Tres objetos se sientan a conversar. O tal vez no son objetos. Abre el libro y decide qué estás viendo.</p>
          <a className="text-link" href="#introduccion">Antes de abrir <ArrowIcon /></a>
        </div>

        <div className="hero__collage" aria-label="Collage decorativo surrealista">
          <div className="sunburst" />
          <p className="collage-note collage-note--top">un asiento<br />para la duda</p>
          <div className="suit-figure">
            <div className="suit-figure__head"><span /></div>
            <div className="suit-figure__neck" />
            <div className="suit-figure__body"><i /><b /></div>
            <div className="suit-figure__leg suit-figure__leg--left" />
            <div className="suit-figure__leg suit-figure__leg--right" />
          </div>
          <div className="wheel" aria-hidden="true"><span /><i /><b /></div>
          <div className="couch" aria-hidden="true"><span /><i /><b /></div>
          <p className="collage-note collage-note--bottom">nada encaja<br />por accidente</p>
        </div>

        <aside className="hero__side-label">PENSAMIENTO<br />CRÍTICO<br /><span>2026</span></aside>
      </section>

      <section className="introduction" id="introduccion" aria-labelledby="intro-title">
        <div className="section-marker">I<br /><span>El umbral</span></div>
        <div className="introduction__body">
          <p className="eyebrow">Antes de pasar página</p>
          <h2 id="intro-title">Una introducción que todavía<br /><em>está por escribirse.</em></h2>
          <p className="placeholder-copy">[Este espacio está reservado para una breve introducción al libro: una invitación a mirar lo cotidiano desde otro ángulo, a detenerse ante las imágenes y a cuestionar las asociaciones que damos por hechas.]</p>
        </div>
        <div className="stamp">LEER<br />SIN<br />PRISA</div>
      </section>

      <section className="book-section" id="libro" aria-labelledby="book-title">
        <div className="book-section__heading">
          <div>
            <p className="eyebrow">II · El libro</p>
            <h2 id="book-title">Pasa. <em>Mira.</em><br />Vuelve a pasar.</h2>
          </div>
          <a className="download-button" href={pdfPath} download>
            <span className="download-button__icon" aria-hidden="true">↓</span>
            <span>Descargar<br /><b>PDF completo</b></span>
          </a>
        </div>
        <div className="book-frame">
          <div className="book-frame__tape book-frame__tape--left" />
          <div className="book-frame__tape book-frame__tape--right" />
          <Flipbook src={pdfPath} height="min(75vh, 820px)" backgroundColor="#e8d56c" />
        </div>
      </section>

      <footer className="credits" id="creditos">
        <div className="credits__title">
          <p className="eyebrow">III · Quienes hicieron posible el desorden</p>
          <h2>Contribuyentes</h2>
        </div>
        <div className="contributor-list">
          {contributors.map((contributor, index) => (
            <a className="contributor" href={contributor.href} target="_blank" rel="noreferrer" key={`${contributor.name}-${index}`}>
              <span className="contributor__number">0{index + 1}</span>
              <span><strong>{contributor.name}</strong><small>{contributor.role}</small></span>
              <span className="linkedin">in</span>
            </a>
          ))}
        </div>
        <div className="credits__bottom">
          <span>© 2026 · Llanta, sillón y traje</span>
          <span>Hecho con demasiadas preguntas</span>
        </div>
      </footer>
    </main>
  )
}

export default App
