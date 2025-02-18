import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import {Textarea} from "../../ui/Textarea";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";
import useCreateCabin from "./useCreateCabin.js";
import useEditCabin from "./useEditCabin.js";


 function CreateCabinForm({cabinToEdit={}, onCloseModal}) {
     const {id: editId, ...editValue} = cabinToEdit;
     const isEditSession = Boolean(editId);
     const {isCreating, createCabin} = useCreateCabin();
     const {isEditing, editCabin} = useEditCabin();
     const {register, handleSubmit,reset , getValues, formState} = useForm(
         {defaultValues: isEditSession? editValue : {}}
     );
     const {errors} = formState;
     const isWorking = isCreating || isEditing;

     function onSubmit(data){
         console.log(data)
         const image = typeof data.image === "string"? data.image : data.image[0];
         if(isEditSession) editCabin(
             {newCabinData: {...data, image}, id: editId},
             {onSuccess: (data)=> {
                  reset();
                  onCloseModal();
                 }}
         ) ;
         else createCabin({...data, image:data.image[0]},{
             onSuccess: (data)=> {
                  reset();
                  onCloseModal();
                 }},
         );
     }


  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input type="text" id="name" {...register("name", {required:"This field is required!"})}/>

      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {
            ...register("maxCapacity",
                {required:"This field is required!",
                    min: {value: 1, message: "Capacity must be at least 1"},
                })}/>
      </FormRow>

      <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {required:"This field is required!"})}/>
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
            required:"This field is required!",
            validate: (value)=> value >= 0 && value <= getValues().regularPrice || "Discount must be between 0 and regular price"
        })}/>
      </FormRow>

      <FormRow label="description" error={errors?.description?.message}>
        <Textarea type="text" id="description" defaultValue="" {...register("description", {required:"This field is required!"})}/>
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput
            id="image"
            accept="image/*"
            {...register("image",{
                required: isEditSession? false : "This field is required!",
            })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={()=>onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession? "Edit": "Add"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
