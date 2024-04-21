import PokemonSlot from "./pokemonSlot"
import { useState } from "react";
import "../styles/PokemonList.css";

export default function PokemonList({pokemonList}){
const [selectedPokemon, setSelectedPokemon] = useState(null);

const handlePokemonSelected = (pokemon) => {
    setSelectedPokemon(pokemon);
};

const handleClosePopup = () => {
    setSelectedPokemon(null);
};

    return(
        <>
        <div style={{display: "flex", justifyContent: "left", flexWrap: "wrap"}} class="listOfPokemon">
        {pokemonList.map((pokemon, index) => (
        <div key={index}>
            <div class="pokemonItem" onClick={()=>handlePokemonSelected(pokemon)}>
                <PokemonSlot pokemon={pokemon}/>
            </div>
        </div> 
        ))}
        </div>
        {selectedPokemon && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-card">
                        <div className="pokemon-info">
                            <p>{selectedPokemon.name}</p>
                            <div className="pokemon-popup-image">
                            <img
                                className="pokemon-image"
                                src={selectedPokemon.sprites?.front_default}
                                alt={selectedPokemon.name}
                            /></div>
                            <p>Height: {selectedPokemon.height}</p>
                            <p>Weight: {selectedPokemon.weight}</p>
                            <p>Primary type: {selectedPokemon.types[0].type.name}</p>
                            {selectedPokemon.types[1] && <p>Secondary type: {selectedPokemon.types[1].type.name}</p>
                            }
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}