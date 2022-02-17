import { Dialog } from "@mui/material"

export default function OverDialog(props) {
    const open = props.open;
    const setGameOver = props.setOpen;
    const summary = props.summary
    return <Dialog open={open} onClose={() => { setGameOver(false) }} fullWidth maxWidth="sm">
        <div style={{ display: "flex", flexDirection: "column", height: "200px", justifyContent:"center", alignItems: "center" }}>
            <h1>Game Over</h1>
            <div>{summary}</div>
        </div>

    </Dialog>
}