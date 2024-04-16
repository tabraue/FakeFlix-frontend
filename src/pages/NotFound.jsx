import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Vaia.. no encontramos eso que andabas buscando</h1>
      <p>Mejor vuelve...</p>
      <Link to={'/'} className="linkbtn">Volver al home</Link>
    </div>
  )
}

export default NotFound