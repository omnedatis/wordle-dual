import * as React from 'react'
import { Dialog, Button, Divider } from '@mui/material';
import { height } from '@mui/system';
export default function IntroDialog(props) {
    const introOpen = props.introOpen;
    const setIntroOpen = props.setIntroOpen;
    return (<Dialog open={introOpen} fullWidth maxWidth="sm"
    ><div style={{ display: "flex", flexDirection: "column", margin: "10px", marginLeft:"30px", marginRight:"30px"}}>
            <h3 style={{ alignSelf: "center", marginTop: "5px", marginBottom: "5px" }}>HOW TO PLAY</h3>
            <p style={{ marginBottom: "1px" }}>
                Guess the <em>WORDLE</em> in six tries.
            </p>
            <p style={{ marginBottom: "1px" }}>
                Each guess must be a valid five-letter word. Hit the enter button to submit.
            </p>
            <p>
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>
            <Divider />
            <h4>Examples</h4>
            <div style={{ display: "flex", flexDirection: "row", height: "45px" }}>
                <div style={{
                    backgroundColor: "#6aaa64",
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#6aaa64",
                    borderWidth: "2px",
                    marginRight: "2px"
                }}>W</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>E</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>A</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>R</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>Y</div>
            </div>
            <p>The letter W is in the word and in the correct spot.</p>
            <div style={{ display: "flex", flexDirection: "row", height: "45px" }}>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px"
                }}>P</div>
                <div style={{
                    backgroundColor: "#c9b458",
                    flexBasis: "42px",
                    textAlign: "center",
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#c9b458",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>I</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>L</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>L</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>S</div>
            </div>
            <p>The letter I is in the word but in the wrong spot.</p>
            <div style={{ display: "flex", flexDirection: "row", height: "45px" }}>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px"
                }}>V</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>A</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>G</div>
                <div style={{
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#878a8c",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>U</div>
                <div style={{
                    backgroundColor: "#787c7e",
                    flexBasis: "42px",
                    textAlign: "center",
                    fontSize: "30px",
                    color: "white",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderColor: "#787c7e",
                    borderWidth: "2px",
                    marginRight: "2px",
                }}>E</div>
            </div>
            <p>The letter U is not in the word in any spot.</p>
            <Divider flexItem/>
            <h4>A new WORDLE will be available each day!</h4>
            <div style={{ display: "flex", flexGrow: 1, flexDirection: "row" }}>
                <div style={{ flexGrow: 4 }}>
                    &nbsp;
                </div>
                <Button style={{
                    flexGrow: .5,
                    borderRadius: "3px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    margin: "10px",
                    color: "black"
                }}
                    onClick={() => { setIntroOpen(false) }} >
                    <div >Go !</div>
                </Button>
            </div>
        </div>
    </Dialog>
    );
}