import service from "../config/api";
import ContactType from "../config/types/domain/ContactType";

const list = async ()=>{
    const res = await service.Contact.get('');
    return res.data.data; 
}

const add = async (params: ContactType)=>{
    delete params.id;
    const res = await service.Contact.post('', params);
    
    return res; 
}

const edit = async (params: ContactType)=>{
    const data = {
        firstName: params.firstName,
        lastName: params.lastName,
        photo: params.photo,
        age: params.age,
    }
    
    const res = await service.Contact.put(`/${params.id}`, data);
    
    return res; 
}

const remove = async (params: ContactType['id'])=>{
    console.log(params);
    
    const res = await service.Contact.delete(`/${params}`);
    console.log(res);
    
    return res; 
}

const contactService = {
list,
add,
edit,
remove
}

export default contactService