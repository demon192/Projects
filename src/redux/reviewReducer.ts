import { Action } from "./action";

export interface reviewState {
    reviews: string[]
}

const initialState = {
    reviews: []
}

export const reviewsReducer = (state: reviewState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_REVIEW": {
            return { ...state, reviews: [...state.reviews, action.payload] }
        }
        default:
            return state;
    }
}