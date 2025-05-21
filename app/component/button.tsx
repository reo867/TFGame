"use client";
import { ReactElement, useState } from "react";
import styles from "./button.module.css";
import { FaRegCircle } from "react-icons/fa6"
import { RxCross1 } from "react-icons/rx";
interface ButtonProps {
  team: boolean;
  changeName: (newValue: boolean) => void;
  // team: str
  // ing | boolean;
}
const iconMaru = <FaRegCircle/>
const iconBatsu = <RxCross1 />
const Button = (props:ButtonProps) => {
  // console.log(team);
  let newValue: string | boolean = "";
    const [marubatsu, setMarubatsu] = useState<ReactElement>();
    const shiraberu = () => {
      console.log(props.team);
        if (props.team === true) {
          setMarubatsu(iconMaru)
          // value = marubatsu;
          newValue = props.team;
          return props.changeName(newValue);
        } else {

          // console.log(team);
          setMarubatsu(iconBatsu)
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
