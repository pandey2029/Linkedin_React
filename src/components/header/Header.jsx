import Icon from "../../atoms/icons/Icon";
import headerProfilePhoto from "../images/headerProfile.jpeg"

import "./Header.css";
import LinkedinIcon from "./LinkedinIcon";
import SearchBar from "./SearchBar";



export default function Header(){
    return(
        <header>
      <div id="searchWrapper">
        <div id="logoContainer">
            <LinkedinIcon/>
        </div>
        <SearchBar/>
      </div>

      <div id="iconWrapper">
        {[
          { label: "Home", icon: "home" },
          { label: "My Network", icon: "people" },
          { label: "Jobs", icon: "work" },
          { label: "Messaging", icon: "chat" },
          { label: "Notifications", icon: "notifications" },
        ].map((item, index) => (
          <div key={index} className="iconContainer">
            <span className="material-icons">{item.icon}</span>
            <div>{item.label}</div>
          </div>
        ))}

        <div className="iconContainer">
          <img
            src={headerProfilePhoto}
            alt="Profile"
          />
          <div className="headerText">
            Me
            <Icon id="dropDown" icon="arrow_drop_down"/>
          </div>
        </div>

        <div id="headerExtra">
          <div className="iconContainer" id="business">
            <span className="material-icons">business</span>
            <div className="headerText">
              For Business <Icon icon="arrow_drop_down"/>
            </div>
          </div>

          <div className="iconContainer" id="premium">
            <span className="material-icons" style={{ color: "#dce83b" }}>star</span>
            <div className="headerText">Try Premium for Rs 0</div>
          </div>
        </div>
      </div>
    </header>
    )
}