// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <table>
          <caption>True or False Game</caption>
        </table>
        <thead>
          <tr>
            <th>
              <button>
                <span>True</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        <tfoot>
          <tr>
            <th>
              <button>
                <span>False</span>
              </button>
            </th>
          </tr>
        </tfoot>
      </main>
    </div>
  );
}
