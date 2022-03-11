import { handleBreakpoints } from "@mui/system";
import { useRef, useEffect } from "react";
const keyStyle = {
    margin: "5px",
    textAlign: "center",
    flexBasis: "40px",
    borderRadius: "5px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    paddingTop: "15px",
    paddingLeft: "10px",
    paddingRight: "10px"
};
const colorMap = { "A": "#6aaa64", "B": "#c9b458", "X": "#787c7e" }
export default function KeyChip(props) {
    const value = props.value;
    const pressValue = props.value !== '--' ? props.value:'backspace';
    const letterState = props.letterState;
    const eventHandles = props.eventHandles
    const {position, setPosition, currentAnswer, setCurrentAnswer, handleKeyboardEvent} = eventHandles;
    const handleOnClick = function (){
        if ((position < 5) && (value !== '--') &&(value !== 'enter')){
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value;
            setCurrentAnswer(newAnswer);
            setPosition(position+1);
        };
    };
    const fakeKeyboard = function () {
        const keyPress = {key:pressValue}
        handleKeyboardEvent(keyPress)
    }
    let bcolor;
    let tcolor;
    if (!(value in letterState)) {
        bcolor = "#dfe0e1";
        tcolor = null;
    } else {

        const state = letterState[value];
        bcolor = colorMap[state];
        tcolor = "white";
    }
    return <div  style={{ ...keyStyle, backgroundColor: bcolor, color:tcolor}} onClick={fakeKeyboard}>{value}</div>
}