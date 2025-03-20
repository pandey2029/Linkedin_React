/* eslint-disable react/prop-types */
export default function EducationContent({school,branch,grade,startMonth,startYear,endMonth,endYear,img}){
    let yearRange = "";

    if (startMonth!="Month" && endMonth!="Month") {
       
        yearRange = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
    } else if (startMonth!="Month") {
       
        yearRange = `${startMonth} ${startYear} - ${endYear}`;
    } else if (endMonth!="Month") {
       
        yearRange = `${startYear} - ${endMonth} ${endYear}`;
    } else {
       
        yearRange = `${startYear} - ${endYear}`;
    }
    return(
        <>
            <div className="educationWrapper">
                    <img className="instituteImg" src={img}/>
                    <div className="educationContent">
                        <div className="school">{school}</div>
                        <div className="branch">{branch}</div>
                        <div className="year">{yearRange}</div>
                        <div className="grade">Grade: {grade}</div>
                    </div>
            </div>

        </>
    )
}