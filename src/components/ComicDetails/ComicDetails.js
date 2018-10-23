import React from 'react';
import './ComicDetails.css';

const ComicDetails = () => (
  <div className="container">
  <div className="cell cell-1">
    <h3>Image</h3>
  </div>
  <div className="cell cell-2">
    <h2>Title</h2>

  </div>
  <div className="cell cell-3">
    <h3>Descripción</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id 
      sed. Quas autem dolorem unde ab aut labore possimus sapiente reiciendis 
      corrupti, numquam distinctio quisquam quia vel eos vero dolorum?
    </p>
  </div>
  <div className="cell cell-4"><h3>Details</h3></div>
</div>
)

export default ComicDetails;