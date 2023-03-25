import { useState } from "react";

const useTextBg = () => {
    const [inputValue, setInputValue] = useState("");
    const [bgColor, setBgColor] = useState(true);
    const showInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const changeBgColor = () => {
        setBgColor(!bgColor);
    }
    return { inputValue, showInputValue, bgColor, changeBgColor };
};

export default useTextBg;