import styles from "../activity/Activity.module.scss"
export default function Comments(){
return(
<>
      <div className={styles.contentDiv} id={styles.comments}>
        <div className={styles.commentsBody}>
          <div className={styles.commentsHeader}>
            <div>
              <b>Shubham Pandey</b> commented on a post •
            </div>
            <div className={styles.day}>6d</div>
          </div>
          <div className={styles.commentsContent}>
            Congratulations <span className={styles.link}>Vansh</span>.
          </div>
        </div>

        <div className={styles.commentsBody}>
          <div className={styles.commentsHeader}>
            <div>
              <b>Shubham Pandey</b> commented on a post •
            </div>
            <div className={styles.day}>6d</div>
          </div>
          <div className={styles.commentsContent}>
            Congratulations <span className={styles.link}>Vansh</span>.
          </div>
        </div>

        <div className={styles.commentsBody}>
          <div className={styles.commentsHeader}>
            <div>
              <b>Shubham Pandey</b> commented on a post •
            </div>
            <div className={styles.day}>6d</div>
          </div>
          <div className={styles.commentsContent}>
            Congratulations <span className={styles.link}>Vansh</span>.
          </div>
        </div>

        <div id={styles.commentsFooter}>
          Show all Comments
          <svg
            id={styles.commentsFooterArrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <path
              fill="#00000099"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
    </>
)}