import React from "react";
import { Detail, Pokemon, PokemonDetail } from "../interface";
import PokemonList from "./pokemonList";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setViewDetail } = props;
  const selePokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setViewDetail({
        id: id,
        isOpened: true,
      });
    }
  };

  return (
    <>
      <section
        className={
          viewDetail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {viewDetail.isOpened ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((p) => {
          return (
            <div onClick={() => selePokemon(p.id)}>
              <PokemonList
                viewDetail={viewDetail}
                setViewDetail={setViewDetail}
                key={p.id}
                name={p.name}
                id={p.id}
                abilities={p.abilities}
                image={p.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonCollection;
