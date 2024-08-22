import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanet = ({ img2, title2, planetId }) => {
    const { store: { planets }, actions: { addFavorite } } = useContext(Context);

    const handleAddFavorite = () => {
        const planet = planets.find(p => p.uid === planetId);
        if (planet) addFavorite(planet, 'planet');
    };

    return (
        <div className="card bg-secondary bg-dark text-light" style={{ minWidth: "200px" }}>
            <img src={img2} className="card-img-top" alt={`${title2} thumbnail`} />
            <div className="card-body">
                <h5 className="card-title">{title2}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/SPlanet/${planetId}`} className="btn btn-warning">Details</Link>
                    <button 
                        type="button" 
                        className="btn btn-outline-warning bg-success" 
                        onClick={handleAddFavorite}
                    >
                        <i className="fas fa-star"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
