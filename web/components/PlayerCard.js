import BoardCard from "./BoardCard"
export default function PlayerCard (props) {
    const playerState = props.playerState;
    const currentAnswer = props.currentAnswer;
    const currentRow = props.currentRow;
    const hidden = props.hidden;
    return <BoardCard boardState={playerState} currentAnswer={currentAnswer} currentRow={currentRow} hidden={hidden} />
}