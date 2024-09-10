import React from "react";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as EngineIcon } from "../../assets/engine.svg";
import { ReactComponent as TransmissionIcon } from "../../assets/transmission.svg";
import { useNavigate } from "react-router-dom";
import path from "../../constants/paths";

import {
    CardBody,
    CardButton,
    CardHeader,
    CardProperties,
    CardProperty,
    CardSubTitle,
    CardTitle,
} from "./CompareCard.styles";
import { useDispatch } from "react-redux";
import { addCompareCar } from "../../redux/car-listing/carListing.reducers";
import "./CompareCard.css";

let arr = [];
const CompareCard = ({ car }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        id,
        carCompany,
        carModel,
        vin,
        carMileage,
        location,
        carEngine,
        images,
        transmission,
    } = car;
    return (
        <div className="compareCard">
            <div className="cardTopImage">
                <img src={images[0]} className="topImage" alt="" />
            </div>
            <CardBody>
                <CardHeader>
                    <CardTitle>{`${carCompany} ${carModel}`}</CardTitle>
                    <CardSubTitle>{vin}</CardSubTitle>
                </CardHeader>
                <CardProperties>
                    <CardProperty>
                        <EngineIcon />
                        <span>{carMileage}</span>
                    </CardProperty>
                    <CardProperty>
                        <LocationIcon />
                        <span>{location}</span>
                    </CardProperty>
                    <CardProperty>
                        <TransmissionIcon />
                        <span>{transmission}</span>
                    </CardProperty>
                    <CardProperty>
                        <EngineIcon />
                        <span>{carEngine}</span>
                    </CardProperty>
                </CardProperties>
            </CardBody>
            <CardButton
                onClick={() => {
                    dispatch(addCompareCar(id));
                    arr.push(id);
                    if (arr.length === 2) {
                        navigate(path.LIST_COMPARISION);
                    }
                }}
            >
                Compare
            </CardButton>
        </div>
    );
};

export default CompareCard;
