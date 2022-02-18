
export default function BoardCard(props) {
    const boardState = props.boardState;
    const currentAnswer = props.currentAnswer;
    const currentRow = props.currentRow;
    const hidden = props.hidden;
    const rows = Array(6).fill().slice().map((e, ridx) => {
        const items = Array(5).fill().slice().map((e, idx) => {
            const row = ridx === currentRow ? currentAnswer : boardState[ridx];
            const ele = row[idx] 
            const name = hidden ? null : ele.name
            return (
                <div key={`row${ridx}_${idx}`} datastate="empty"
                    style={{margin: "2px",
                    borderStyle: "solid",
                    borderColor: ele.borderColor,
                    borderWidth: "2px",
                    width:"60px",
                    paddingTop:"5px",
                    fontSize:"30px",
                    textAlign:"center",
                    fontWeight:"bold",
                    color:ele.color,
                    backgroundColor:ele.backgroundColor}}>
                    {name}
                </div>);
        });
        return <div key={`col_${ridx}`} style={{ display: "flex", height:"60px", alignItems:"stretch"}}
        >{items}</div>
    });
    return (
        <div className="d-flex" style={{ flexDirection: "column" }}>
            {rows}
        </div>
    );
}