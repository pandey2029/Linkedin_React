import headerProfilePhoto from "../images/headerProfile.jpeg"
import "./Header.css";
export default function Header(){
    return(
        <header>
      <div id="searchWrapper">
        <div id="logoContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mercado-match"
            width="45"
            height="45"
            focusable="false"
          >
            <path
              id="logo"
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path>
          </svg>
        </div>
        <div className="searchBarContainer">
          <input className="searchBar" placeholder="Search" />
          <span className="material-icons search-icon">search</span>
        </div>
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
            <span className="material-icons" id="dropDown">arrow_drop_down</span>
          </div>
        </div>

        <div id="headerExtra">
          <div className="iconContainer" id="business">
            <span className="material-icons">business</span>
            <div className="headerText">
              For Business <span className="material-icons">arrow_drop_down</span>
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