import { AxiosResponse } from "axios";
import service from "../config/api";
import { handleAxiosError } from "../config/api/response";
import ContactType from "../config/types/domain/ContactType";

const list = async ()=>{
    let error: boolean | string = false

    const res = await service.Contact.get('').catch(e=> error = handleAxiosError(e)) as AxiosResponse;
    if (error) {      
        throw new Error(error);  
    } 
    return res.data.data; 
}

const add = async (params: ContactType)=>{
    let error: boolean | string = false
    
    delete params.id;
    const res = await service.Contact.post('', params).catch(e=> error = handleAxiosError(e));
    if (error) {      
        throw new Error(error);  
    } 
    return res; 
}

const edit = async (params: ContactType)=>{
    let error: boolean | string = false
    
    const data = {
        firstName: params.firstName,
        lastName: params.lastName,
        photo: params.photo,
        age: params.age,
    }
    
    const res = await service.Contact.put(`/${params.id}`, data).catch(e=> error = handleAxiosError(e));
    if (error) {      
        throw new Error(error);  
    } 
    return res; 
}

const remove = async (params: ContactType['id'])=>{
    let error: boolean | string = false
    const res = await service.Contact.delete(`/${params}`).catch(e=> error = handleAxiosError(e));
    if (error) {
        
        throw new Error(error);  
    }
    return res;
}

const contactService = {
list,
add,
edit,
remove
}

export default contactService