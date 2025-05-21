"use client";
import { useState } from "react";
import styles from "../page.module.css";

interface ButtonProps {
  team: boolean;
}

const Button = (team:ButtonProps) => {
  // console.log(team);
    const [marubatsu, setMarubatsu] = useState("");
    const shiraberu = () => {
      console.log(team);
        if (team.team === true) {
          return setMarubatsu("まる")
        } else {
          // console.log(team);
          return setMarubatsu("なし")
        };
    }
    // console.log(marubatsu);
      return (
        <>
          <button className={styles.ground} onClick={shiraberu}>
            <div>
                {marubatsu}
            </div>
          </button>
        </>
      );
    };

export default Button;
