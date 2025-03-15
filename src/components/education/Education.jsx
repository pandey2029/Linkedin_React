
import modalEvent from "../../utils/Event"
import "./Education.css"
export default function Education(){
    
    function addModal(){
        modalEvent.emit("activeModal","education")
    }
    
    return(
        <>
        <div id="education" >
                <div id="educationHeader" className="sectionHeader">
                    <div id="educationHeaderLeft" className="sectionHeaderLeft">
                        Education 
                    </div>
                    <div id="educationHeaderRight" className="sectionHeaderRight">
                        <i className="material-icons add" id="addEduBtn" onClick={addModal}>add</i>
                       
                        <i className="material-icons option" >edit</i>
                    </div>
                </div>
            <div id="educationContentContainer">
                    
                <div className="educationWrapper" style={{border:"0"}}>
                    <img className="instituteImg" src="https://media.licdn.com/dms/image/v2/D4D0BAQHn7jfCd8lURw/company-logo_100_100/company-logo_100_100/0/1686635689100/lnmiitjpr_logo?e=1745452800&v=beta&t=qBatTg8x4RGCBtAlWidhkXj_4yLIttonxlzXrBv0skg"/>
                    <div className="educationContent">
                        <div className="school">The LNM Institute of Information Technology</div>
                        <div className="branch">Bachelor  Technology - BTech, computer Science</div>
                        <div className="year">2021-2025</div>
                        <div className="grade">Grade 8</div>
                    </div>
                </div>

                <div className="educationWrapper">
                    <img className="instituteImg" src="https://media.licdn.com/dms/image/v2/C510BAQEMQocU_u5uSQ/company-logo_100_100/company-logo_100_100/0/1630592972129/delhipublicschoolghaziabad_logo?e=1745452800&v=beta&t=C_gO4kc4hHnrM9MYgEYmpo2nZoTU1Q0UYGJaJrWNcKs"/>
                    <div className="educationContent">
                        <div className="school">Delhi Public School Ghaziabad Society</div>
                        <div className="branch">{"12'th PCM, CBSE"}</div>
                        <div className="year">2020-2021</div>
                        <div className="grade">Grade: 97%</div>
                    </div>
                </div>

                <div className="educationWrapper">
                    <img className="instituteImg" src="https://media.licdn.com/dms/image/v2/C510BAQEMQocU_u5uSQ/company-logo_100_100/company-logo_100_100/0/1630592972129/delhipublicschoolghaziabad_logo?e=1745452800&v=beta&t=C_gO4kc4hHnrM9MYgEYmpo2nZoTU1Q0UYGJaJrWNcKs"/>
                    <div className="educationContent">
                        <div className="school">Delhi Public School Ghaziabad Society</div>
                        <div className="branch">{"10'th, CBSE"}</div>
                        <div className="year">2018-2019</div>
                        <div className="grade">Grade: 98%</div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )

    // <div>
    //     <Card header footer>
    //         <>data.map(<EducvationINfo data={}></Educvation>)</>
    //     </Card>
    // </div>
}