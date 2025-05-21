"use client";
import { useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  team: boolean | string;
  changeName?: () => void;
  // team: str
  // ing | boolean;
}

const Button = (team:ButtonProps, changeName:ButtonProps) => {
  // console.log(team);
  let newValue: string | boolean = "";
    const [marubatsu, setMarubatsu] = useState("");
    const shiraberu = () => {
      console.log(team.team);
        if (team.team === true) {
          setMarubatsu("まる")
          // value = marubatsu;
          newValue = team.team;
          return changeName(newValue);
        } else {
          // console.log(team);
          setMarubatsu("ばつ")
          // value = marubatsu;
          newValue = team.team;
          return changeName(newValue);
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
