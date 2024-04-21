import { useState, useEffect } from "react"
import PokemonList  from "../components/PokemonList";
export default function FrontPage() {
  const [pokemonData, setPokemonData] = useState([]);
    const [pageNr, setPageNr] = useState(0);

    async function fetchPokemonList(pageNumber) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${20 * pageNumber}`);
            const data = await response.json();
            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                return pokemonResponse.json();
            }));
            setPokemonData(pokemonDetails);
        } catch (error) {
            console.error("Error fetching Pokemon:", error);
        }
    }

    useEffect(() => {
        fetchPokemonList(pageNr);
    }, [pageNr]);

    function loadMore() {
        setPageNr(pageNr + 1);
    }

    function loadLess() {
        if (pageNr === 0) {
            // Do nothing if already on the first page
            return;
        } else {
            setPageNr(pageNr - 1);
        }
    }

    return (
      <> 
          <div style={{display: "flex", justifyContent: "center"}} class="col-md-12">
              <button style={{margin: "10px"}} type="button" class="btn btn-primary" onClick={loadLess}>Previous</button>
              <button style={{margin: "10px"}} type="button" class="btn btn-secondary" onClick={loadMore}>Next</button>
          </div>
          <div class="container" style={{width: "100%"}}>
          <div>
          <PokemonList pokemonList={pokemonData}/>
          </div>
          </div>
          </>
 
    );
  };
