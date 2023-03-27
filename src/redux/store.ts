import { reviewsReducer } from './reviewReducer';
import { createStore } from "redux";
import { emailReducer } from './loginReducer';

export const store = createStore(reviewsReducer)

// export const loginDetailStore = createStore(loginReducer);

export const emailStore = createStore(emailReducer);
