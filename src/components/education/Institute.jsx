/* eslint-disable react/prop-types */
import flexStyles from "../../styles/flexStyle.module.scss"
import styles from "./Education.module.scss"
import Image from "../../atoms/img/Image"
export default function Institute({school,branch,year,grade}){
    let yearRange = "";

    if (year.startMonth != "Month" && year.endMonth != "Month") {

        yearRange = `${year.startMonth} ${year.startYear} - ${year.endMonth} ${year.endYear}`;
    } else if (year.startMonth != "Month") {

        yearRange = `${year.startMonth} ${year.startYear} - ${year.endYear}`;
    } else if (year.endMonth != "Month") {

        yearRange = `${year.startYear} - ${year.endMonth} ${year.endYear}`;
    } else {

        yearRange = `${year.startYear} - ${year.endYear}`;
    }
    return (
        <>
            <div className={`${styles.educationWrapper} ${flexStyles['flexRow-gap-l-left']}`}>
                    <Image className={styles.instituteImg} src="https://media.licdn.com/dms/image/v2/D4D0BAQHn7jfCd8lURw/company-logo_100_100/company-logo_100_100/0/1686635689100/lnmiitjpr_logo?e=1745452800&v=beta&t=qBatTg8x4RGCBtAlWidhkXj_4yLIttonxlzXrBv0skg"/>
                    <div className={flexStyles['flexColumn-gap-s-left']}>
                        <div className={styles.school}>{school}</div>
                        <div className={styles.branch}>{branch}</div>
                        <div className={styles.year}>{yearRange}</div>
                        <div className={styles.grade}>{grade}</div>
                    </div>
            </div>
        </>
    )
}