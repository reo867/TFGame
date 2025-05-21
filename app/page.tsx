"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./component/button";



export default function Home() {
  const [team, setTeam] = useState(true);
  const [namae, setNamae] = useState("player1")
  // cnnst [team2, setTeam2] = useState("");
  // const [marubatsu, setMarubatsu] = useState(true);
  // const buttontrue =() => {
  //   setTeam(true);
  // }
  // const buttonfalse = () => {
  //   setTeam(false);
  //   // console.log(team);
  // }
  const changeName = (newValue:boolean) => {
    if (newValue ===true) {
      setTeam(false)
      setNamae("player1")

    } else {
        setTeam(true)
        setNamae("player2")
      }
    }
  }


  return (
    <div className={styles.container}>
      {/* <button onClick={classToggle}></button> */}
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
          <div>True of False game</div>

              {/* <button onClick={buttontrue}>
                <span>True</span>
              </button> */}
              {/* <button onClick={buttonfalse}>
                <span>False</span>
              </button> */}
          <p>{namae}の番です！</p>
          <div>
            <Button team={team} changeName={changeName()}/>
            <Button team={team} changeName={changeName()}/>
            <Button team={team} changeName={changeName()}/>
          </div>
          <div>
            <Button team={team} changeName={changeName()}/>
            <Button team={team} changeName={changeName()}/>
            <Button team={team} changeName={changeName()}/>
          </div>
          <div>
            <Button team={team} changeName={}/>
            <Button team={team} changeName={}/>
            <Button team={team} changeName={}/>
          </div>


              {/* <button onClick={() => setTeam(false)}>
                <span>False</span>
              </button> */}
    </div>
    </div>
  );
