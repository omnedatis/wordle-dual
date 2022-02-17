import KeyChip from "./KeyChip"
export default function Keyboard(props) {
    const { letterState, ...eventHandles } = props
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "200px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexGrow: 1 }}>
                <KeyChip value={`Q`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`W`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`E`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`R`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`T`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`Y`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`U`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`I`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`O`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`P`} letterState={letterState} eventHandles={eventHandles} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexGrow: 1 }}>
                <KeyChip value={`A`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`S`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`D`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`F`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`G`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`H`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`J`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`K`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`L`} letterState={letterState} eventHandles={eventHandles} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexGrow: 1 }}>
                <KeyChip value={`ENTER`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`Z`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`X`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`C`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`V`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`B`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`N`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`M`} letterState={letterState} eventHandles={eventHandles} />
                <KeyChip value={`--`} letterState={letterState} eventHandles={eventHandles} />
            </div>
        </div>
    )
}