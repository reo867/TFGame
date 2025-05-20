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
          <caption>True or False Game</caption>

        <thead>
          <tr>
            <th>
              <button onClick={() => setTeam(true)}>
                <span>True</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </tr>
          <tr>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </tr>
          <tr>
            <Button team={team}/>
            <Button team={team}/>
            <Button team={team}/>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <button onClick={() => setTeam(false)}>
                <span>False</span>
              </button>
            </th>
          </tr>
        </tfoot>
    </div>
    </div>
  );
}
