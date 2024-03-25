import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Restaurant {
    id: number;
    name: string;
}

interface RestaurantsState {
    value: Restaurant[];
}

const initialState: RestaurantsState = {
    value: [],
};

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action: PayloadAction<Restaurant>) => {
            state.value.push(action.payload);
        },
    },
});

export const { addRestaurant } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
