"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./component/button";



export default function Home() {
  const [team, setTeam] = useState(true);
  const [namae, setNamae] = useState("playerA")
  const [result, setResult] = useState(false)
  // const [katimake, setKatimake]= useState(Number)
  // cnnst [team2, setTeam2] = useState("");
  // const [marubatsu, setMarubatsu] = useState(true);
  // const buttontrue =() => {
  //   setTeam(true);
  // }
  // const buttonfalse = () => {
  //   setTeam(false);
    // console.log(team);
  // }
// [123, 456, 789, 147, 258, 369, 159, 357]
const kotae01:number[] = [1, 2, 3]
// const kotae02:number[] = [4, 5, 6]
// const kotae03:number[] = [7, 8, 9]
// const kotae04:number[] = [1, 4, 7]
// const kotae05:number[] = [2, 5, 8]
// const kotae06:number[] = [3, 6, 9]
// const kotae07:number[] = [1, 5, 9]
// const kotae08:number[] = [3, 5, 7]
function hasPartialMatch(kotae01:number[], kachi:number[]):boolean {
  return kotae01.every(element => kachi.includes(element));
}

  const changeName = (newValue:boolean) => {
    // let kachi = []
    // let make = []

    if (newValue ===true) {
      setTeam(false)
      setNamae("playerB")

    } else {
        setTeam(true)
        setNamae("playerA")
      }
    }

    const decideWin = (win:number[]) => {
      const kachi:number[] = win
      console.log(kachi)
      if (hasPartialMatch(kotae01, kachi)) {
        return setResult(true)
      }
    }
    const decideLose = (lose:number[]) => {
      const make:number[] = lose
      console.log(make)
      if (hasPartialMatch(kotae01, make)) {
        return setResult(true)
      }
    }



  return (
    <div className={styles.container}>
      {/* <button onClick={classToggle}></button> */}
      <div className={styles.page}>
      {/* <main className={styles.main}> */}
          <div>まる罰ゲームです！</div>

              {/* <button onClick={buttontrue}>
                <span>True</span>
              </button> */}
              {/* <button onClick={buttonfalse}>
                <span>False</span>
              </button> */}
          <p>{result ? `${namae}さんの勝ちです！！`:`${namae}の番です！`}</p>
          <div className={styles.grid}>
            <Button team={team} changeName={changeName} id={[1]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[2]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[3]} decideWin={decideWin} decideLose={decideLose}/>

          <div>
            <Button team={team} changeName={changeName} id={[4]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[5]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[6]} decideWin={decideWin} decideLose={decideLose}/>
          </div>
          <div>
            <Button team={team} changeName={changeName} id={[7]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[8]} decideWin={decideWin} decideLose={decideLose}/>
            <Button team={team} changeName={changeName} id={[9]} decideWin={decideWin} decideLose={decideLose}/>
          </div>


              {/* <button onClick={() => setTeam(false)}>
                <span>False</span>
              </button> */}
      </div>
    </div>
    </div>
  );
}