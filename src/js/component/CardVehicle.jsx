import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicle = ({ img2, title2, vehicleId }) => {
    const { store: { vehicles }, actions: { addFavorite } } = useContext(Context);

    const handleAddFavorite = () => {
        const vehicle = vehicles.find(v => v.uid === vehicleId);
        if (vehicle) addFavorite(vehicle, 'vehicle');
    };

    return (
        <div className="card bg-secondary bg-dark text-light" style={{ minWidth: "250px" }}>
            <img src={img2} className="card-img-top" alt={`${title2} thumbnail`} />
            <div className="card-body">
                <h5 className="card-title">{title2}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/SVehicle/${vehicleId}`} className="btn btn-warning">Details</Link>
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
