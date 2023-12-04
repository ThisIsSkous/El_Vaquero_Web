import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUsername('Cliente');
    setLoggedIn(true);
  };

  const ferreteriaProducts = [
    {
      name: 'Martillo de Garra',
      description: 'Martillo resistente con garra para múltiples usos.',
      price: 19.99,
    },
    {
      name: 'Destornillador Set (5 piezas)',
      description: 'Juego de destornilladores con diversas puntas.',
      price: 24.99,
    },
    {
      name: 'Cinta Métrica',
      description: 'Cinta métrica de 5 metros para mediciones precisas.',
      price: 14.99,
    },
    {
      name: 'Sierra de Mano',
      description: 'Sierra versátil para cortes precisos en madera y otros materiales.',
      price: 34.99,
    },
    {
      name: 'Juego de Llaves Inglesas (10 piezas)',
      description: 'Llaves ajustables de diferentes tamaños en un set conveniente.',
      price: 29.99,
    },
  ];

  return (
    <div className="app-container">
      <h1 className="title">El Vaquero</h1>
      <nav className="navbar">
        <div className="nav-content">
          <ul>
            <li>Inicio</li>
            <li>Menú</li>
            <li>Perfil</li>
            <li>Soporte</li>
          </ul>
          <button className="login-button" onClick={handleLogin}>
           Comprar
          </button>
        </div>
      </nav>
      <div className="content">
        {loggedIn ? (
          <>
            <p>Bienvenido, {username}</p>
            <section className="products">
              <h2>Productos Ferreteros</h2>
              <ul>
                {ferreteriaProducts.map((product, index) => (
                  <li key={index}>
                    <strong>{product.name}</strong>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <div>
            {}
          </div>
        )}
      </div>
      <footer className="footer">
        <p>Josue Vasquez</p>
      </footer>
    </div>
  );
};

export default App;
