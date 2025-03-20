import Input from "../../atoms/input/Input";

export default function SearchBar(){
    return(
        <div className="searchBarContainer">
          <Input attributes={{className:"searchBar",placeholder:"Search"}}/>
          <span className="material-icons search-icon">search</span>  
        </div>
    )
}