import WordleBoard from "./WordleBoard"
export default function MachineCard (props) {
    const answerState = props.machineAnswer
    return <WordleBoard answerState={answerState}/>
}