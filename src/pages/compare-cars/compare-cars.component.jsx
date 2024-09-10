import React from "react";
import { useSelector } from "react-redux";
import CompareCard from "../../components/CompareCard/CompareCard.component";
import { CarListingsWrapper, CarsList } from "../new-listings/newListings.styles";

const ComaprePage = () => {
    const cars = useSelector((state) => state.carListing.cars);
    console.log(cars);
    return (
        <CarListingsWrapper>
            <CarsList>
                {cars.map((car) => (
                    <CompareCard car={car} key={car.vin} />
                ))}
            </CarsList>
        </CarListingsWrapper>
    );
};


export default ComaprePage;