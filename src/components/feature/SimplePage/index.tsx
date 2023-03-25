import useTextBg from '../../../hooks/useTextBg';
import SimplePageChild1 from './SimplePageChild1';
import SimplePageChild2 from './SimplePageChild2';
import './style.css';

const SimplePage = () => {
    const { inputValue, showInputValue, bgColor, changeBgColor } = useTextBg();
    return (
        <div className="parent">
            <SimplePageChild1 setInputValue={showInputValue} setBgColor={changeBgColor} />
            <SimplePageChild2 inputValue={inputValue} bgColor={bgColor} />
        </div>
    )
}



export default SimplePage;