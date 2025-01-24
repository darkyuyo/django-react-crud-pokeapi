import { useForm } from "react-hook-form";
import { createPokemon, deletePokemon } from "../api/pokemon.api";
import { useNavigate, useParams } from "react-router-dom";

export function PokemonFormPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit(async (data) => {
    await createPokemon(data);
    navigate("/pokemon");
  });
  return (
    <div className="background-container-create">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
        ></input>
        <input
          type="text"
          placeholder="Número"
          {...register("numero", { required: true })}
        ></input>
        <input
          type="text"
          placeholder="Tipo 1"
          {...register("tipo1", { required: true })}
        ></input>
        <input
          type="text"
          placeholder="Tipo 2"
          {...register("tipo2", { required: false })}
        ></input>
        <button type="submit">Crear Pokemon</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm(
              "¿Estás seguro de que quieres borrar este pokemon?"
            );
            if (accepted) {
              await deletePokemon(params.id);
              navigate("/pokemon");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
