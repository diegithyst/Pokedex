export default function PokemonSlot({pokemon}){
  
    return(
        <>
        <div>
            <img src={pokemon?.sprites?.front_default} />
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
        </div>
        </>
    )
}

