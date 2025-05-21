"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./component/button";




export default function Home() {
  const [team, setTeam] = useState(true);
  // cnnst [team2, setTeam2] = useState("");
  // const [marubatsu, setMarubatsu] = useState(true);
  const buttontrue =() => {
    setTeam(true);
  }
  const buttonfalse = () => {
    setTeam(false);
    // console.log(team);
  }


  return (
    <div>
      {/* <button onClick={classToggle}></button> */}
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
          <div>True of False game</div>

              <button onClick={buttontrue}>
                <span>True</span>
              </button>
              <button onClick={buttonfalse}>
                <span>False</span>
              </button>
          <div>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </div>
          <div>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </div>
          <div>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </div>


              {/* <button onClick={() => setTeam(false)}>
                <span>False</span>
              </button> */}
    </div>
    </div>
  );
}