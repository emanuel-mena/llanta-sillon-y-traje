import Flipbook from './Flipbook'
import { ContributorBadge } from './components/ContributorBadge'
import { FaGithub } from 'react-icons/fa6'
import { LuArrowDown, LuArrowDownRight } from 'react-icons/lu'
import './App.css'

const pdfPath = '/Cuentos_Imagen_Polisemica.pdf'
const imagePath = '/image.png'

const contributors = [
  { name: 'Max Alonso Guzman Rodriguez', role: 'Editor Principal', href: 'https://www.linkedin.com/in/max-alonso-guzman-rodriguez-a99b71336/', photo : 'https://media.licdn.com/dms/image/v2/D4E03AQGRwNI2PqeJWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731169789640?e=1787184000&v=beta&t=O2V51AyDo-O2y-bv6U7mpbKAYI5QEcYxyUedVcXODdU' },
  { name: 'Fabián Vargas Hidalgo', role: 'Editor Auxiliar', href: 'https://www.linkedin.com/in/fabianvh/', photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFazXjlg0rXag/profile-displayphoto-shrink_800_800/B4DZSPlYmRG4Ac-/0/1737575730860?e=1787184000&v=beta&t=kqE0QfCJ-9pQk0NYcxxWgwxJ7XIbAWflaHVaUvu6IP4'},
  { name: 'Emanuel Mena Araya', role: 'Diseñador', href: 'https://www.linkedin.com/in/emanuel-mena-araya/', photo : 'https://media.licdn.com/dms/image/v2/D4E03AQEMguF9QZ-Bwg/profile-displayphoto-crop_800_800/B4EZ6aJNQ5JEAI-/0/1780702569721?e=1787184000&v=beta&t=CeC4hySCmfHLyMdsCxKZCuI5q_RRbEWwKHfvCRQlc3s' },
]

function ArrowIcon() {
  return <LuArrowDownRight aria-hidden="true" className="arrow-icon" />
}

function App() {
  return (
    <main className="book-page">
      <nav className="topbar" aria-label="Navegación principal">
        <a className="wordmark" href="#inicio" aria-label="Ir al inicio">LST <span>—</span> 01</a>
        <div className="topbar__links">
          <a href="#libro">El libro</a>
          <a href="#creditos">Créditos</a>
          <a className="topbar__github" href="https://github.com/emanuel-mena/llanta-sillon-y-traje" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" /> Repositorio
          </a>
        </div>
      </nav>

      <section className="hero" id="inicio" aria-labelledby="page-title">
        <div className="hero__copy">
          <p className="eyebrow">Pensamiento crítico · Sección FCV0</p>
          <h1 id="page-title">La llanta, el sillón y los trajes</h1>
          <p className="hero__lede">Antología de relatos sobre percepción y pensamiento crítico.</p>
          <a className="text-link" href="#introduccion">Antes de abrir <ArrowIcon /></a>
        </div>

        <div className="hero__collage" aria-label="Collage decorativo surrealista">
          <img src={imagePath} alt="" />
        </div>

        <aside className="hero__side-label">PENSAMIENTO<br />CRÍTICO<br /><span>C2 2026</span></aside>
      </section>

      <section className="introduction" id="introduccion" aria-labelledby="intro-title">
        <div className="section-marker">I<br /><span>El umbral</span></div>
        <div className="introduction__body">
          <p className="eyebrow">Antes de pasar página</p>
          <h2 id="intro-title">Una introducción a <br /><em>estas historias.</em></h2>
          <p className="placeholder-copy">Como parte del Curso de Pensamiento Crítico de la Universidad CENFOTEC, se se hizo una actividad de escribir un cuento en base a una imagen polisemica, estos son los productos de esa actividad </p>
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
            <LuArrowDown className="download-button__icon" aria-hidden="true" />
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
            <ContributorBadge key={`${contributor.name}-${index}`} index={index} name={contributor.name} role={contributor.role} linkedinUrl={contributor.href} photoUrl={contributor.photo} />
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
