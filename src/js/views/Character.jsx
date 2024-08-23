import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Character = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailsCharacter(params.id);
    }, []);

    return (
        <React.Fragment>
            {store.detailsCharacter ? (
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                    <div className="row border-bottom pb-4 mb-4 w-100">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                className="img-fluid rounded"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                                alt={store.detailsCharacter.uid}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "bold" }}>{store.detailsCharacter.name}</h1>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "light" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores eaque exercitationem numquam architecto tenetur fugit praesentium sunt iste eos,
                                delectus minima saepe quam impedit obcaecati maiores,
                                voluptatum cupiditate quibusdam. Tenetur.
                            </p>
                        </div>
                    </div>
                    <div className="row w-100" style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Name</strong></p>
                            <p>{store.detailsCharacter.name}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Birth Year</strong></p>
                            <p>{store.detailsCharacter.birth_year}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Gender</strong></p>
                            <p>{store.detailsCharacter.gender}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Height</strong></p>
                            <p>{store.detailsCharacter.height}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Skin Color</strong></p>
                            <p>{store.detailsCharacter.skin_color}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Eye Color</strong></p>
                            <p>{store.detailsCharacter.eye_color}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading character...</p>
            )}
        </React.Fragment>
    );
};
