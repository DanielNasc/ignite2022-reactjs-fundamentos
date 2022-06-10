import { format, formatDistanceToNow } from "date-fns";
import {useState} from "react";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [newComment, setNewComment] = useState("");

  const [comments, setComments] = useState(["Comentário 1", "Comentário 2"]);

  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, event.target.comment.value])
    setNewComment("")
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
  }

  function deleteComment(comment) {
    setComments(comments.filter(c => c !== comment))
  }

  function handleInvalidComment() {
    event.target.setCustomValidity("Comentário inválido")
  }

  const isNewCommentEmpty = newComment.trim().length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
          {
            content.map(item => {
              if (item.type === "paragraph") {
                return <p key={item.content}>{item.content}</p>
              } else if (item.type === "link") {
                return <p key={item.content}><a href="#">{item.content}</a></p>
              }
            })
          }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newComment}
          required
          onInvalid={handleInvalidComment}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          ))
        }
      </div>
    </article>
  );
}
