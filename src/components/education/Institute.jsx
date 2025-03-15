/* eslint-disable react/prop-types */
export default function Institute({school,branch,year,grade}){
    return (
        <>
            <div className="educationWrapper">
                    <img className="instituteImg" src=""/>
                    <div className="educationContent">
                        <div className="school">{school}</div>
                        <div className="branch">{branch}</div>
                        <div className="year">{year}</div>
                        <div className="grade">{grade}</div>
                    </div>
            </div>
        </>
    )
}