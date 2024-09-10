import React from "react";
import "./list-comparision.styles.scss";
import { useSelector } from "react-redux";

const ListComparision = () => {
    const cars = useSelector((state) => state.carListing.cars);
    const compareCar = useSelector((state) => state.carListing.compareCars);
    const filteredData = cars.filter(
        (item) => item.id === compareCar[0] || item.id === compareCar[1]
    );
    return (
        <div className="row">
            <div className="col-sm-6">
                <table>
                    <thead>
                        <tr>
                            <td>Feature</td>
                            <td>1993 BMW M5 Touring</td>
                            <td>2006 Ferrari 612 Scaglietti</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">image</th>
                            <td>
                                <img
                                    className="card-img-bottom"
                                    src={filteredData[0].images}
                                    alt=""
                                />
                            </td>
                            <td>
                                <img
                                    className="card-img-bottom"
                                    src={filteredData[1].images}
                                    alt=""
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Company</th>
                            <td>{filteredData[0].carCompany}</td>
                            <td>{filteredData[1].carCompany}</td>
                        </tr>
                        <tr>
                            <th scope="row">Model</th>
                            <td>{filteredData[0].carModel}</td>
                            <td>{filteredData[1].carModel}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mileage</th>
                            <td>{filteredData[0].carMileage}</td>
                            <td>{filteredData[1].carMileage}65000</td>
                        </tr>
                        <tr>
                            <th scope="row">Engine</th>
                            <td>{filteredData[0].carEngine}</td>
                            <td>{filteredData[1].carEngine}</td>
                        </tr>
                        <tr>
                            <th scope="row">seller's Name</th>
                            <td>{filteredData[0].sellerName}</td>
                            <td>{filteredData[1].sellerName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Location</th>
                            <td>{filteredData[0].location}</td>
                            <td>{filteredData[1].location}</td>
                        </tr>
                        <tr>
                            <th scope="row">seller's note</th>
                            <td>{filteredData[0].sellerNotes}</td>
                            <td>{filteredData[1].sellerNotes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListComparision;
