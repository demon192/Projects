export type Action = {
    type: "ADD_REVIEW",
    payload: string
}

export const addReview = (review: string): Action => (
    {
        type: "ADD_REVIEW",
        payload: review
    }
)