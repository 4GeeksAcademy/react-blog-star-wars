import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardCharacter = ({ img, title, characterId }) => { 
    const { store: { characters }, actions: { addFavorite } } = useContext(Context);

    const handleAddFavorite = () => {
        const character = characters.find(c => c.uid === characterId);
        if (character) addFavorite(character, 'character');
    };

    return (
        <div className="card bg-secondary bg-dark text-light" style={{ minWidth: "200px" }}>
            <img src={img} className="card-img-top" alt={`${title} thumbnail`} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/SCharacter/${characterId}`} className="btn btn-warning">Details</Link>
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
