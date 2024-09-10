import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    transactions: [
        {
            carName:"Beatle",
            carCompany: "Volkswagen",
            carManufacturingYear: 2018,
            carDescription: "lorem ipsum blah blah car",
            imgThumbnail: "https://i.pinimg.com/736x/cf/54/46/cf5446eb7242189157a286acf841316a--volkswagen-new-beetle-volkswagen-beetle-convertible.jpg",
            carTransactionType: "Buy"
        },
        {
            carName:"Wagon R",
            carCompany: "Maruti",
            carManufacturingYear: 2012,
            carDescription: "lorem ipsum blah blah car",
            imgThumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Suzuki_Karimun_Wagon_R_GL_%28front%29.jpg",
            carTransactionType: "Sell"
        },
        {
            carName:"Model S",
            carCompany: "Tesla",
            carManufacturingYear: 2020,
            carDescription: "lorem ipsum blah blah car",
            imgThumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg",
            carTransactionType: "Buy"
        },
    ],
};

const carTransactionSlice = createSlice({
    name: "history",
    initialState: INITIAL_STATE,
    reducers: {
        addHistory(state, action) {
            state.cars.push(action.payload);
        },
    },
});

export const { addHistory } = carTransactionSlice.actions;

export default carTransactionSlice.reducer;
