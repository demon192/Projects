import { reviewsReducer } from './reviewReducer';
import { createStore } from "redux";

export const store = createStore(reviewsReducer)