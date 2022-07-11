import Chairs from "../../assets/chairs.png";

/* eslint-disable import/no-anonymous-default-export */
function Home() {
  return (
    <section className="flex h-screen overflow-hidden">
      <figure className="w-2/5">
        <img src={Chairs} alt="Movie Chairs" className="w-full h-full align-top object-cover"/>
      </figure>
      <div className="w-3/5">
        <h2>Busca tu película...</h2>
        <input />
        <div>
          <button>
            Buscar
          </button>
          <button>
            Limpiar
          </button>
        </div>
      </div>
    </section>
    )
    
}

export default Home;
