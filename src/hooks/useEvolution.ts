import { apiFetch } from "../utils/api-fetch";
import { useQuery } from 'react-query';
import { normalizeEvolutionChain } from '../utils/helper';

const useEvolution = (id : number) => {
    const { data } = useQuery({
        queryKey: ['chain', id],
        queryFn: async () => {
            try {
                const { evolution_chain } = await apiFetch(`/pokemon-species/${ id }/`);
    
                const res = await fetch(evolution_chain.url);
                const { chain } = await res.json();
    
                return normalizeEvolutionChain(chain);
            } catch (error) {
                if (error instanceof Error) {
                    if(error.message !== "") {
                        return [];
                    }
                }
            }
        },
    });

    return data;
};

export default useEvolution;
