import { Dialog, Button } from "@mui/material"

export default function OverDialog(props) {
    const open = props.open;
    const setGameOver = props.setOpen;
    const summary = props.summary;
    const handleGameRestart = props.restart
    return <Dialog open={open} onClose={() => { setGameOver(false) }} fullWidth maxWidth="sm">
        <div style={{ display: "flex", flexDirection: "column", height: "200px", justifyContent:"center", alignItems: "center" }}>

            <h1>{summary}</h1>
            <Button onClick={handleGameRestart} style={{
                fontSize:"15px", 
                fontWeight:"bold",
                textTransform:"none",
                backgroundColor:"#d3d6da",
                padding:"10px",
                color:"black",
                borderRadius:"5px",
                fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                marginTop:"5px"}}><div >Restart</div></Button>
        </div>

    </Dialog>
}