import './style.css';


type Child2Props = {
    inputValue: string,
    bgColor: boolean
}

const SimplePageChild2 = ({ inputValue, bgColor }: Child2Props) => {
    return (
        <div className='child2' style={{ background: bgColor ? 'purple' : 'orange' }}>
            <h2 className='child1Text'>{inputValue}</h2>
        </div>


    )
}


export default SimplePageChild2;