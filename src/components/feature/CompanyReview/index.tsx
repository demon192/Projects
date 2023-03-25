import { NewNoteInput } from '../AddReview'
import './style.css'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { reviewState } from '../../../redux/reviewReducer'
import { addReview } from '../../../redux/action'

export const CompanyReview = () => {
    const reviews = useSelector<reviewState, reviewState['reviews']>((state) => state.reviews)
    const dispatch = useDispatch()
    const onAddReview = (review: string) => {
        dispatch(addReview(review));
    }
    return (
        <div className="reviewPage">
            <NewNoteInput addReview={onAddReview} />
            <hr />
            <ul className="reviewList">
                {
                    reviews.map((review) => {
                        return <li className="reviews">{review}</li>
                    })
                }
            </ul>
        </div>
    )
}