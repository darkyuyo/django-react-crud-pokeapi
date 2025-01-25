import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createPokemon,
  deletePokemon,
  updatePokemon,
  getPokemon,
} from "../api/pokemon.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function PokemonFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPokemon() {
      if (params.id) {
        const res = await getPokemon(params.id);
        setValue("nombre", res.data.nombre);
        setValue("numero", res.data.numero);
        setValue("tipo1", res.data.tipo1);
        setValue("tipo2", res.data.tipo2);
      }
    }
    loadPokemon();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatePokemon(params.id, data);
      toast.success("Pokemon editado", {
        position: "bottom-right",
        style: { backgroundColor: "green", color: "white" },
      });
    } else {
      await createPokemon(data);
      toast.success("Pokemon creado", {
        position: "bottom-right",
        style: { backgroundColor: "green", color: "white" },
      });
    }
    navigate("/pokemon");
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
          className="bg-white p-3 rounded-lg block w-full mb-3"
        ></input>
        <input
          type="text"
          placeholder="Número"
          {...register("numero", { required: true })}
          className="bg-white p-3 rounded-lg block w-full mb-3"
        ></input>
        <input
          type="text"
          placeholder="Tipo 1"
          {...register("tipo1", { required: true })}
          className="bg-white p-3 rounded-lg block w-full mb-3"
        ></input>
        <input
          type="text"
          placeholder="Tipo 2"
          {...register("tipo2", { required: false })}
          className="bg-white p-3 rounded-lg block w-full mb-3"
        ></input>
        <button
          type="submit"
          className="bg-white p-3 rounded-lg block mx-auto mt-3"
        >
          Crear Pokemon/Editar
        </button>
      </form>
      {params.id && (
        <button
          className="bg-white p-3 rounded-lg block mx-auto mt-3"
          onClick={async () => {
            const accepted = window.confirm(
              "¿Estás seguro de que quieres borrar este pokemon?"
            );
            if (accepted) {
              await deletePokemon(params.id);
              toast.success("Pokemon eliminado", {
                position: "bottom-right",
                style: { backgroundColor: "red", color: "white" },
              });
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
