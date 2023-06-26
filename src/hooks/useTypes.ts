import { useQuery } from "react-query";
import { apiFetch } from "../utils/api-fetch";
import { Base, DefaultResponse } from '../types/pokemon-types';

const useTypes = () => {
    const { data } = useQuery({
        queryKey: ['types'],
        queryFn: async () => {
            const { results } : DefaultResponse = await apiFetch('/type');

            return results.filter(({ name }: Base) => name !== 'unknown' && name !== 'shadow');
        }
    });

    return data;
};

export default useTypes;