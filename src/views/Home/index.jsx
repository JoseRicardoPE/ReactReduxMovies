import Chairs from "../../assets/chairs.png";

/* eslint-disable import/no-anonymous-default-export */
function Home() {
  return (
    <section className="flex h-screen overflow-hidden">
      <figure className="w-2/5">
        <img src={Chairs} alt="Movie Chairs" className="w-full h-full align-top object-cover"/>
      </figure>
      <div className="w-3/5 flex flex-col justify-center items-center px-10">
        <h2 className="text-4xl font-bold font-lato">Busca tu película...</h2>
        <input className="bg-gray font-lato w-full my-3 h-9 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"/>
        <div className="flex w-full justify-between">
          <button className="bg-red-500 text-white hover:bg-red-600 font-lato w-full shadow-lg h-9 text-lg" style={{width: "48%"}}>
            Buscar
          </button>
          <button className="bg-red-500 text-white hover:bg-red-600 font-lato w-full shadow-lg h-9 text-lg" style={{width: "48%"}}>
            Limpiar
          </button>
        </div>
      </div>
    </section>
    )
    
}

export default Home;
