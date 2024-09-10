/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cars: [],
    compareCars: [],
};

const carListingSlice = createSlice({
    name: "carListing",
    initialState: INITIAL_STATE,
    reducers: {
        addCarDetails(state, { payload }) {
            state.cars.push(payload);
        },
        fetchCarListingsSuccesss(state, { payload }) {
            state.cars = payload;
        },
        addCarToFav(state, action) {
            state.cars.forEach((car, i) => {
                if (car.vin === action.payload.vin) {
                    state.cars[i].favourite = !state.cars[i].favourite;
                }
            });
        },
        addCompareCar(state, action) {
            console.log(state.compareCars.length);
            if (state.compareCars.length >= 2) {
                state.compareCars = [];
            }
            state.compareCars.push(action.payload);
        },
        updateCarListings(state, { payload }) {
            state.cars = state.cars.map((car) => {
                if (car.vin === payload.vin) {
                    return payload;
                } else {
                    return car;
                }
            });
        },
        deleteCarListings(state, { payload }) {
            state.cars = state.cars.filter((car) => car.vin !== payload.vin);
        },
    },
});

export const { addCarDetails, addCarToFav, addCompareCar, fetchCarListingsSuccesss, updateCarListings, deleteCarListings } = carListingSlice.actions;

export default carListingSlice.reducer;
