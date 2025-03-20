import styles from "../activity/Activity.module.scss"

export default function Comment({data}) {
   
  return (
    <div className={styles.commentsBody}>
      <div className={styles.commentsHeader}>
        <div>
          <b>{data.name}</b> {data.action}
        </div>
        <div className={styles.day}>{data.time}</div>
      </div>
      <div className={styles.commentsContent}>
        {data.content}
      </div>
    </div>
  );
}
