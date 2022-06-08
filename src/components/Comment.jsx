import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/cccounte.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Xx_EpicMan_xX</strong>
                            <time title="11 de junho de 2022 às 19:34" dateTime="2022-06-04 19:34">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>    

                    <p>Aí sim, menó</p>
                </div>

                <footer>
                   <button>
                       <ThumbsUp />
                       Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>


        </div>
    )
}