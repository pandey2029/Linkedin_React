import "./Footer.css"
export default function Footer(){
    return (
        <>
            <footer>
            <div className="footerColumn">
                <ul>
                    <li>About</li>
                    <li>Professional Community Policies</li>
                    <li>Privacy & Terms</li>
                    <li>Sales Solutions</li>
                    <li>Safety Center</li>
                </ul>
                <div id="trademark">LinkedIn Corporation © 2025</div>
            </div>
            <div className="footerColumn">
                <ul>
                    <li>Accessibility</li>
                    <li>Careers</li>
                    <li>Ad hoices</li>
                    <li>Mobile</li>
                </ul>
            </div>
            <div className="footerColumn">
                <ul>
                    <li>Talent Solutions</li>
                    <li>Marketing Solutions</li>
                    <li>Advertising</li>
                    <li>Small Business</li>
                </ul>
            </div>
            
            <div className="footerColumn">
                <ul>
                    <li className="liWithSymbol">
                        <span className="material-icons">help</span>
                        <div className="liText">
                            <div>Questions?</div>
                            <div>Visit Our Help Center</div>
                        </div>
                    </li>
                    <li className="liWithSymbol">
                        <span className="material-icons">settings</span>
                        <div className="liText">
                            <div>Manage yourccount and privacy</div>
                            <div>Go to your settings</div>
                        </div>
                    </li>
                    <li className="liWithSymbol">
                        <span className="material-icons">security</span>
                        <div className="liText">
                            <div>Recommendation Transrency</div>
                            <div>Learn more about recommended Content</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footerColumn">
                <label htmlFor="language">Select Language</label>
                    <select id="language" name="language">
                        <option value="0">English</option>
                        <option value="1">Japanese</option>
                        <option value="2">French</option>
                        <option value="3">Italian</option>
                        <option value="4">Dutch</option>
                        <option value="5">Korean</option>
                        <option value="6">Spanish</option>
                        <option value="7">Chinese</option>
                        <option value="8">Polish</option>
                        
                    </select>
            </div>
        </footer>        
        </>
    )
}