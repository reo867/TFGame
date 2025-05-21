"use client";
import { useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  team: boolean;
  changeName: (newValue: boolean) => void;
  // team: str
  // ing | boolean;
}

const Button = (props:ButtonProps) => {
  // console.log(team);
  let newValue: string | boolean = "";
    const [marubatsu, setMarubatsu] = useState("");
    const shiraberu = () => {
      console.log(props.team);
        if (props.team === true) {
          setMarubatsu("まる")
          // value = marubatsu;
          newValue = props.team;
          return props.changeName(newValue);
        } else {
          // console.log(team);
          setMarubatsu("ばつ")
          // value = marubatsu;
          newValue = props.team;
          return props.changeName(newValue);
        };
    }
    // console.log(marubatsu);
      return (
        <>
          <button onClick={shiraberu} className={styles.botan}>
                <span className={styles.tyousei}>{marubatsu}</span>
          </button>
          
        </>
      );
    };

export default Button;
