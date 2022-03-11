import { Divider } from '@mui/material'
import * as React from 'react'
import IntroDialog from '../components/IntroDialog'
import WordleHeader from '../components/WordleHeader'
import PlayerCard from '../components/PlayerCard'
import MachineCard from '../components/MachineCard'
import OverDialog from '../components/OverDialog'
import Keyboard from '../components/keyboard'
const fetcher = (path, data) => {
  const url = path
  const req_content = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  }
  return fetch(url, req_content).then(res => {
    return res.json();
  })
}
const colorMap = { "A": "#6aaa64", "B": "#c9b458", "X": "#787c7e" }

class DefaultGrid {
  constructor() {
    this.name = null;
    this.backgroundColor = null;
    this.color = null;
    this.answer = null;
    this.borderColor = "#d3d6da";
  };
};
export default function App() {
  const [introOpen, setIntroOpen] = React.useState(true);
  const [playerState, setPlayerState] = React.useState(Array(6).fill().map(() => {
    const newRow = Array(5).fill().map(() => {
      return new DefaultGrid;
    });
    return newRow
  }));
  const [machineState, setMachineState] = React.useState(Array(6).fill().map(() => {
    const newRow = Array(5).fill().map(() => {
      return new DefaultGrid;
    });
    return newRow
  }));
  const [currentAnswer, setCurrentAnswer] = React.useState(Array(5).fill().map(() => {
    return new DefaultGrid;
  }));
  const [position, setPosition] = React.useState(0)
  const [currentRow, setCurrentRow] = React.useState(0);
  const [gameId, setGameId] = React.useState(Date.now());
  const [gameOver, setGameOver] = React.useState(false);
  const [summary, setSummary] = React.useState('')
  const [overDialogOpen, setOverDialogOpen] = React.useState(false)
  const [letterState, setLetterState] = React.useState({})
  const [hidden, setHidden] = React.useState(false)
  const handleGameRestart  = function () {
    setIntroOpen(true);
    setPlayerState(Array(6).fill().map(() => {
      const newRow = Array(5).fill().map(() => {
        return new DefaultGrid;
      });
      return newRow
    }));
    setMachineState(Array(6).fill().map(() => {
      const newRow = Array(5).fill().map(() => {
        return new DefaultGrid;
      });
      return newRow
    }));
    setCurrentAnswer(Array(5).fill().map(() => {
      return new DefaultGrid;
    }));
    setPosition(0);
    setCurrentRow(0);
    setGameId(Date.now());
    setGameOver(false);
    setSummary('');
    setOverDialogOpen(false);
    setLetterState({});
    setHidden(false);
    
      fetcher(`/api/startGame`, { "gameId": gameId }
      ).then(data => console.log('game restart'));
  }
  React.useEffect(() => {
    fetcher(`/api/startGame`, { "gameId": gameId }
    ).then(data => {
    });
  }, [gameId]);
  const handleKeyboardEvent = function (e) {

    const value = e.key.toLowerCase();
    if (!gameOver) {
      switch (value) {
        case 'a':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'b':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'c':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'd':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'e':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'f':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'g':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'h':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'i':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'j':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'k':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'l':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'm':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'n':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'o':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'p':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'q':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'r':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
        case 's':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 't':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'u':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'v':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'w':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'x':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'y':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'z':
          if (position < 5) {
            let newAnswer = currentAnswer.slice();
            newAnswer[position].name = value.toUpperCase();
            setCurrentAnswer(newAnswer);
            setPosition(position + 1);
          };
          break;
        case 'backspace':
          if (position >= 0) {
            let newPosition = position

            if (newPosition !== 0) {
              newPosition -= 1
            }
            let newAnswer = currentAnswer.slice()
            newAnswer[newPosition].name = null
            setCurrentAnswer(newAnswer)
            setPosition(newPosition);
          };
          break;
        case 'enter':
          if (currentAnswer.length === 5) {
            let newLetterState = letterState
            let answer = currentAnswer.map((e) => {
              return e.name;
            })
            answer = answer.join('').toLowerCase()
            fetcher("api/getAnswer", {
              "gameId": gameId,
              "answer": answer
            }).then((data) => {
              const userCheck = data.data.response[0];
              const machineAnswer = data.data.response[1].split('');
              const machineCheck = data.data.response[2];
              if (userCheck === '') {
                return
              }
              let newAnswer = currentAnswer.slice();
              for (let [idx, each] of newAnswer.entries()) {
                each.answer = userCheck[idx];
                each.backgroundColor = colorMap[each.answer];
                each.borderColor = colorMap[each.answer];
                each.color = "white"
                newLetterState[each.name] = each.answer
              };
              let newState = playerState.slice();
              newState[currentRow] = newAnswer;
              setPlayerState(newState);
              let newMachineState = machineState.slice();
              for (let [idx, each] of machineAnswer.entries()) {
                newMachineState[currentRow][idx].name = each.toUpperCase();
                newMachineState[currentRow][idx].answer = machineCheck[idx];
                newMachineState[currentRow][idx].color = "white"
                newMachineState[currentRow][idx].backgroundColor = colorMap[machineCheck[idx]];
                newMachineState[currentRow][idx].borderColor = colorMap[machineCheck[idx]];
                // newLetterState[newMachineState[currentRow][idx].name] = newMachineState[currentRow][idx].answer
              };

              const newRow = Array(5).fill().map(() => {
                return new DefaultGrid;
              });
              setMachineState(newMachineState);
              setCurrentRow(currentRow + 1);
              setCurrentAnswer(newRow);
              setPosition(0);
              setLetterState(newLetterState);
              if ((userCheck === "AAAAA") && (machineCheck === "AAAAA")) {
                setGameOver(true);
                setSummary('Shame...');
                setCurrentRow(7);
                setOverDialogOpen(true);
                setHidden(false);
                fetcher("api/endGame", { "gameId": gameId }).then((data)=> {})
              } else if (userCheck === "AAAAA") {
                setGameOver(true);
                setSummary('Congraduation!!');
                setCurrentRow(7);
                setOverDialogOpen(true);
                setHidden(false);
                fetcher("api/endGame", { "gameId": gameId }).then((data)=> {})
              } else if (machineCheck === "AAAAA") {
                setGameOver(true);
                setSummary('You Suck!');
                setCurrentRow(7);
                setOverDialogOpen(true);
                setHidden(false);
                fetcher("api/endGame", { "gameId": gameId }).then((data)=> {})
              } else if (currentRow > 6) {
                setGameOver(true);
                setSummary("It's too late...");
                setCurrentRow(7);
                setOverDialogOpen(true);
                setHidden(false);
                fetcher("api/endGame", { "gameId": gameId }).then((data)=> {})
              };
            });

          };
          break;
        default:
          break;
      };
    } else {
      if (!overDialogOpen) {
        setOverDialogOpen(true)
      }
    };
  };
  return (
    <div onKeyDown={handleKeyboardEvent} tabIndex={0}>
      <IntroDialog introOpen={introOpen} setIntroOpen={setIntroOpen} setHidden={setHidden} />
      <OverDialog open={overDialogOpen} setOpen={setOverDialogOpen} summary={summary} restart={handleGameRestart} />
      <div className="d-flex" style={{ flexDirection: "column" }}>
        <WordleHeader />
        <Divider style={{ marginBottom: "20px" }} />
        <div style={{ display: "flex", flexDirection: "row", flexGrow: 3, margin: "10px", justifyContent: "center" }}>
          <PlayerCard playerState={playerState} currentAnswer={currentAnswer} currentRow={currentRow} hidden={false}/>
          <Divider orientation="vertical" flexItem style={{ marginRight: "20px", marginLeft: "20px" }} />
          <MachineCard machineState={machineState} currentAnswer={currentAnswer} currentRow={7} hidden={hidden}/>
        </div>
        <div style={{ flexGrow: 2 }}>
          <Keyboard letterState={letterState}
            position={position}
            setPosition={setPosition}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            handleKeyboardEvent={handleKeyboardEvent} />
        </div>
      </div>
    </div>
  );
}
