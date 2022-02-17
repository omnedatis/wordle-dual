
export default function WordleBoard(props) {
    const answerState = props.answerState
    const currentAnswer = props.currentAnswer
    const rows = Array(6).fill().slice().map((e, ridx) => {
        const items = Array(5).fill().slice().map((e, idx) => {
            const answer = answerState[ridx][idx] ? undefined : null
            return (
                <div key={`row${ridx}_${idx}`}
                    style={{
                        display: "flex",
                        margin: "2px",
                        borderStyle: "solid",
                        borderColor: "#d3d6da",
                        borderWidth: "2px",
                        padding: "20px"
                    }}>
                    <div  datastate="absent">
                        {answer}
                    </div>
                </div>);
        });
        return <div key={`col_${ridx}`} style={{ display: "flex" }}
        >{items}</div>
    });
    return (
        <div className="d-flex" style={{ flexDirection: "column" }}>
            {rows}
        </div>
    );
}