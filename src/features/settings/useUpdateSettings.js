import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateSetting as updateSettingApi} from "./useSettings.js";

export default function useUpdateSettings() {
    const queryClient = useQueryClient();
    const  {mutate: editSetting, isLoading: isEditing} = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast('Cabin edited successfully!');
            queryClient.invalidateQueries(['settings']);
        },
        onError: (error) => toast(error.message),
    })
    return {isEditing, editSetting};
}