import React from "react";

const Moviecard=(props)=>{
    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2 p-2 bg-dark">
            {props.returncards().map((card,i)=>(
            <div className="col">
              <div className="card m-1">
                <img src={card.posterUrl} className="img-section" alt="..."/>
                <div className="card-body">
                  <h2 className="title text-center"> TITLE: <span className="text-secondary">{card.title}</span></h2>
                  <h4 className="year text-center"> YEAR: <span className="text-secondary">{card.year}</span></h4>
                </div>
              </div>
            </div>
            ))}
            </div>
        </>
    )
    

}

export default Moviecard;