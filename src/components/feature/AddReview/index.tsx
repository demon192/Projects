import './style.css'
import { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
    addReview(review: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addReview }) => {
    const [review, setreview] = useState("")
    const updateReview = (e: ChangeEvent<HTMLInputElement>) => {
        setreview(e.target.value)
    }
    const onAddReviewClick = () => {
        addReview(review)
        setreview("")
    }

    return (
        <div className="writeReview">
            <input onChange={updateReview} type="text" name="review" placeholder="Write Review Here ...." />
            <button onClick={onAddReviewClick}>Add Review</button>
        </div>
    )
}