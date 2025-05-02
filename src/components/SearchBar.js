import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar() {
    const data = [ "chient", "chat", "poisson", "souris", "lapin", "hamster", "perroquet", "serpent", "tortue", "cochon d'inde" ];

    const [value, setValue] = useState("");

    function handleChange(event) {
        const inputValue = event.target.value;
        setValue(inputValue);

        const filteredData = data.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(filteredData); // Affiche les résultats filtrés dans la console
    }

    return (
        <div className="searchBar">
            <div className="inputSearch">
                <input type="text" value={value} onChange={handleChange} placeholder="Search..." />
                <button onClick={ ()=> console.log({value})} type="submit">
                <span className="material-symbols-outlined">search</span>
                </button>
            </div>
            <ul>    
                {value && data.filter((element) => element.includes(value))
                    .map((element, index) => <li onClick={ () => setValue(element)} key={index}>{element}</li>)}  
            </ul>
        </div>
    );
}