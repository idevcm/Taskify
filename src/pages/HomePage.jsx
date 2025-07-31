import HeaderComponent from "../components/HeaderComponent.jsx";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <main className="homepage">
        <section className="hero">
          <div className="hero-text">
            <h1>Bienvenido a <span className="highlight">Taskify</span></h1>
            <p>
              Organiza tus tareas diarias de forma rápida, sencilla y efectiva. 
              Crea, gestiona y marca tus tareas para mantenerte enfocado y ser más productivo.
            </p>
            <Link to="/tasks" className="start-button" aria-label="Empezar a usar Taskify">
              Comenzar Ahora
            </Link>
          </div>
          <div className="hero-image">
            
            <img 
              src="src\assets\Taskify.png" 
              alt="Ilustración de organización de tareas" 
              loading="lazy"
            />
          </div>
        </section>

        <section className="features">
          <h2>¿Por qué elegir Taskify?</h2>
          <div className="features-list">
            <article className="feature-card">
              <h3>Fácil de usar</h3>
              <p>Interfaz intuitiva para que gestiones tus tareas sin complicaciones.</p>
            </article>
            <article className="feature-card">
              <h3>Productividad</h3>
              <p>Marca tus tareas completadas y mantén el control de tu día a día.</p>
            </article>
            <article className="feature-card">
              <h3>Accesible</h3>
              <p>Disponible desde cualquier dispositivo con conexión a internet.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
