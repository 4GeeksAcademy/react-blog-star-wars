import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Vehicle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailsVehicle(params.id);
    }, []);

    return (
        <React.Fragment>
            {store.detailsVehicle ? (
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                    <div className="row border-bottom pb-4 mb-4 w-100">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                className="img-fluid rounded"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                                alt={store.detailsVehicle.name}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "bold" }}>{store.detailsVehicle.name}</h1>
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
                            <p>{store.detailsVehicle.name}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Model</strong></p>
                            <p>{store.detailsVehicle.model}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Manufacturer</strong></p>
                            <p>{store.detailsVehicle.manufacturer}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Cost in Credits</strong></p>
                            <p>{store.detailsVehicle.cost_in_credits}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Length</strong></p>
                            <p>{store.detailsVehicle.length}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Max Atmosphering Speed</strong></p>
                            <p>{store.detailsVehicle.max_atmosphering_speed}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Crew</strong></p>
                            <p>{store.detailsVehicle.crew}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Passengers</strong></p>
                            <p>{store.detailsVehicle.passengers}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Cargo Capacity</strong></p>
                            <p>{store.detailsVehicle.cargo_capacity}</p>
                        </div>
                        <div className="col d-flex flex-column align-items-start">
                            <p><strong>Vehicle Class</strong></p>
                            <p>{store.detailsVehicle.vehicle_class}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading vehicle...</p>
            )}
        </React.Fragment>
    );
};
