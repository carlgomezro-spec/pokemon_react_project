const BASE_API_URL = `https://pokeapi.co/api/v2`;

export const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("No se ha encontrado el Pokemon");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};