import React from 'react';

import Modal1 from './Modal1';

const Card=()=>{



    return(
    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
    </div>
    <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />


</div>
)
}


export default Card;