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
      <main>
        <table>
          <caption>True or False Game</caption>
        </table>
        <thead>
          <tr>
            <th>
              <button onClick={() => setTeam(team)}>
                <span>True</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <Button team/>
            <Button team/>
            <Button team/>
          </tr>
          <tr>
            <Button team/>
            <Button team/>
            <Button team/>
          </tr>
          <tr>
            <Button team/>
            <Button team/>
            <Button team/>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <button onClick={() => setTeam(!team)}>
                <span>False</span>
              </button>
            </th>
          </tr>
        </tfoot>
        <button type="reset">reset</button>
      </main>
    {/* </div> */}
    </div>
    </div>
  );
}
