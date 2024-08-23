import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store: { characters, favorites }, actions: { getCharacters, deleteFavorite } } = useContext(Context);

    useEffect(() => {
        getCharacters();
        console.log(characters);
    }, [getCharacters]);

    const handleDeleteFavorite = (uid, type) => {
        deleteFavorite(uid, type);
    };

    //Filtra los favoritos para evitar duplicados por ID
    const uniqueFavorites = Array.from(new Map(favorites.map(fav => [fav.uid, fav])).values());

    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/">
                <span className="navbar-brand mb-0 h1 ms-5">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" 
                        className="card-img-top" 
                        style={{ maxWidth: "10rem", maxHeight: "10rem" }} 
                        alt="Star Wars logo" 
                    />
                </span>
            </Link>
            <div className="navbar-nav ms-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorite 
                        <span className="badge bg-secondary">{uniqueFavorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {uniqueFavorites.length > 0 ? (
                            uniqueFavorites.map((favorite) => (
                                <li key={favorite.uid}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="dropdown-item">{favorite.name}</span>
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-danger btn-sm" 
                                            onClick={() => handleDeleteFavorite(favorite.uid, favorite.type)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>
                                <span className="dropdown-item">No favorites</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
