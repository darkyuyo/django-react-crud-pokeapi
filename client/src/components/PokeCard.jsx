import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function PokeCard({ pokemon }) {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/Pokemon/${pokemon.id}`)}>
      <h1>{pokemon.nombre}</h1>
      <p>Número: {pokemon.numero}</p>
      <p>
        Tipo: {pokemon.tipo1} {pokemon.tipo2}
      </p>
      <hr></hr>
    </li>
  );
}

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    tipo1: PropTypes.string.isRequired,
    tipo2: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
