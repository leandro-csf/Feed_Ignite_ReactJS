import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { FormEvent, ChangeEvent, InvalidEvent, useState } from "react"

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: `paragraph` | `link`
    content: string
}



interface PostProps {
    author: Author
    publishedAt: Date
    content: Content[]

}

export function Post({author, publishedAt, content}: PostProps) {

    const [comments, setComments] = useState([
        'Post bacana em?'
    ])

    const [newCommentText, setNewCommentText] = useState(``)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment(event:FormEvent) {
            event.preventDefault()
            setComments([...comments, newCommentText])
            setNewCommentText(``)
           

    }

    function handleNewCommentChange(event: ChangeEvent <HTMLTextAreaElement> ) {
        setNewCommentText(event.target.value)

    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleledOne = comments.filter(comment => {
            return (
                comment != commentToDelete
            )
        })
        setComments(commentsWithoutDeleledOne)
    }

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>) {
      console.log(event)  

    }

    const isNewCommentInputEmpty = newCommentText.length == 0

    return (
        
        <article className={styles.post}>
        
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <p><span>{author.role}</span></p>
                </div>
            
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type == 'paragraph') {
                return (<p key={line.content}>{line.content}</p>)
            } else if (line.type == 'link') {
                return (<p key={line.content}> <a href="#">{line.content}</a> </p>)
            }
          })}
            
        </div>

            <div>
                


            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            
            <textarea 
            name="comment"
            placeholder="Deixe um comentario"  
            value={newCommentText}
            onChange={handleNewCommentChange}
            required
            />

            <button type="submit" disabled={isNewCommentInputEmpty}>Comentar</button>
            </form>



            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment 
                        key={comment} 
                        content={comment} 
                        deleteComment={deleteComment}/>
                    )
                })}
            </div>


        </article>

        
    )
}