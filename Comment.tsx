import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react";
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
    content: string
    deleteComment: (comment: string) => void
}

export function Comment({content, deleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        deleteComment(content);
        
    }
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })

    } 

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/128147709?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            Leandro Cesar
                            <time title="Publicado em 2 de abril de 2023">Publicado a 1h</time>
                            <p>{content}</p>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={20}/>
                        </button>
                    </header>

                </div>
                
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )

}