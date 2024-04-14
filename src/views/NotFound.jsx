import Alerta from '../components/Alert'

const NotFound = () => {
  return (
    <>
      <Alerta tipoVariant='danger' error='Error 404' descripcion='Ups, La Ruta no fue encontrada' />
      <div className='image-container'>
        <img src='src/assets/images/404.jpeg' alt='Imagen de Ruta no Encontrada' className='centered-image' />
      </div>
    </>
  )
}

export default NotFound
