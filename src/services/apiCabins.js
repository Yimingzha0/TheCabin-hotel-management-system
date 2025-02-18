import supabase, {supabaseUrl} from "./supabase.js";

export async function getCabins() {
    let { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.error('Cabins could not be loaded');
        throw new Error("Cabins could not be loaded");
    }

    return data;
}

export async function deleteCabin(id) {

    const { error, data } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Cabins could not be deleted');
        throw new Error("Cabins could not be deleted");
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath? newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from("cabins")

    if(!id) query = query.insert([
        {...newCabin, image: imagePath},
    ]);

    if(id) query = query.update({...newCabin, image: imagePath}).eq('id', id);

    const { data, error } = await query.select().single();


    if (error) {
        console.log(error)
        console.error('Cabins could not be created');
        throw new Error("Cabins could not be created");
    }
    // Upload image
    if(hasImagePath) return data;
    const { error: imageError} = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);
    if (imageError) {
        await supabase.from('cabins').delete().eq('id', data.id);
        console.error('Image could not be uploaded');
        throw new Error("Image could not be uploaded");
    }



    return data;
}

