import {useQuery} from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";
import supabase from "../../services/supabase.js";


export function useSettings() {
    const {
        isLoading,
        data: settings,
        error
    } = useQuery({
        queryKey: ['settings'],
        queryFn: getSettings,
    });

    return {isLoading, settings, error};
}

export async function updateSetting(newSetting) {
    const { data, error } = await supabase
        .from("settings")
        .update(newSetting).eq("id", 1).single();

    if (error) {
        console.error(error);
        throw new Error("Settings could not be updated");
    }
    return data;
}