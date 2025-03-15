/* eslint-disable react/prop-types */
import "./ProfileSetup.css"


export default function ProfileSetup(props){
    return(
        <>
            <div id="modal">
        <div id="tab">
            <div id="headerWrapper">
                <div id="header">Add to profile </div>
                <button id="quit" onClick={props.quit}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="17" height="17"><path fill="#74C0FC" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                </button>
            </div>
            <div id="profileSetup">
                    <h3 id="profileSetupHeading">Set up your profile in minutes with a resume</h3>
                    <div id="profileSetupContent">
                        <div id="profileSetupContentText">
                            Upload a recent resume to fill out your profile with the help of AI.
                        </div>
                        <button id="profileSetupContentButton">
                            Get Started
                        </button>
                    </div>
                    
            </div>
            <div id="manualSetup">Manual setup</div>
            <div id="core">
                <div className="subHeader">
                    Core
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="20"><path fill="#7f767c" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                </div>
                <p className="description">Start with the basics. Filling out these sections will help you be discovered by recruiters and people you may know
                </p>
                <div className="sections">
                    <div className="subsection" id="addAbout">
                        Add about
                    </div>
                    <div className="subsection" id="addEdu">
                        Add education
                    </div>
                    <div className="subsection" id="addExp">
                        Add position
                    </div>
                    <div className="subsection">
                        Add services
                    </div>
                    <div className="subsection">
                        Add career break
                    </div>
                    <div className="subsection" id="addSkill">
                        Add skills
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}