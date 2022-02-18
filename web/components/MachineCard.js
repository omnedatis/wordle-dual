import BoardCard from "./BoardCard"
export default function MachineCard (props) {
    const machineState = props.machineState;
    const currentAnswer = props.currentAnswer;
    const currentRow = props.currentRow;
    const hidden = props.hidden;
    return <BoardCard boardState={machineState} currentAnswer={currentAnswer} currentRow={currentRow} hidden={hidden} />
}