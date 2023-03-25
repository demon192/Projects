import './style.css'

type buttonProps = {
    value: string,
}

const Button = (prop: buttonProps) => {
    return (
        <div className="navbar__get_started">
            <a href="#" className="navbar__get_started__link">{prop.value}</a>
        </div>
    )
}

export default Button;