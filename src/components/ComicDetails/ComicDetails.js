import React from 'react';
import './ComicDetails.css';
import Characters from '../Characters/Characters';

const ComicDetails = () => (
  <div>
    <div className="comic-info-container">
      <div className="cell cell-1">
        <h3>Image</h3>
      </div>
      <div className="cell cell-2">
        <h2>Title</h2>
        <h3>Descripción</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id 
          sed. Quas autem dolorem unde ab aut labore possimus sapiente reiciendis 
          corrupti, numquam distinctio quisquam quia vel eos vero dolorum?
        </p>
        <h3>Details</h3>
        <div className="details-container">
          Extensión: 210 Páginas
          Publicado: 2018 10 de septiembre
        </div>
        <button>Comprar | $100.00</button>
        {/* TODO: Agregar icono + */}
        <button>+ Me interesa</button>
      </div>
      {/* <div className="cell cell-3">
        <h3>Descripción</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id 
          sed. Quas autem dolorem unde ab aut labore possimus sapiente reiciendis 
          corrupti, numquam distinctio quisquam quia vel eos vero dolorum?
        </p>
      </div> */}
      {/* <div className="cell cell-4"> */}
      {/* </div> */}
    </div>
    <Characters/>
  </div>
)

export default ComicDetails;