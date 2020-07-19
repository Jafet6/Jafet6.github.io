import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Pagina inicial</h1>
      <Link to='/login'>Login</Link>
      <hr></hr>
      <Link to='/register'>Cadastrar</Link>

    </div>
  )
}

export default Home;
