import './style.css';

type inputProps = {
    placeholder: string,
}

const Input = (props: inputProps) => (

    <input
        type="text"
        name="name"
        id="name"
        placeholder={props.placeholder}
        minLength={4}
        className="left__input"
    />
)

export default Input;