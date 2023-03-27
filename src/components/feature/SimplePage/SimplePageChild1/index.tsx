import './style.css';

type ChildOneProps = {
    setInputValue: React.ChangeEventHandler<HTMLInputElement>
    setBgColor: React.MouseEventHandler<HTMLButtonElement>
}

const SimplePageChild1 = ({ setInputValue, setBgColor }: ChildOneProps) => {
    return (
        <div>
            <div className='Child1'>
                <button className='child1_button' onClick={setBgColor}>Change Background Color</button>
                <input className='child1_input' type="text" placeholder='Enter text here' onChange={setInputValue} />
            </div>
        </div>
    )
}

export default SimplePageChild1;