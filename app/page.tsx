"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./component/button";

export default function Home() {
  const [team, setTeam] = useState(true)



  return (
    <div>
      {/* <button onClick={classToggle}></button> */}
    <div className={styles.page}>
      {/* <main className={styles.main}> */}
          <div>True of False game</div>

        
          
            
              <button onClick={() => setTeam(true)}>
                <span>True</span>
              </button>
        
          
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>

              <button onClick={() => setTeam(false)}>
                <span>False</span>
              </button>

    </div>
    </div>
  );
}