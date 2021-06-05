import service from "../config/api";
import ContactType from "../config/types/domain/ContactType";

const list = async ()=>{
    const res = await service.Contact.get('');
    
    return res.data.data; 
}

const add = async (params: ContactType)=>{
    delete params.id;
    const res = await service.Contact.post('', params);
    
    return res.data.data; 
}

const edit = async (params: ContactType)=>{
    const data = {
        firstName: params.firstName,
        lastName: params.lastName,
        photo: params.photo,
        age: params.age,
    }
    
    const res = await service.Contact.put(`/${params.id}`, data);
    
    return res.data.data; 
}

const remove = async (params: ContactType['id'])=>{
    const res = await service.Contact.delete(`/${params}`);
    return res.data.data; 
}

const contactService = {
list,
add,
edit,
remove
}

export default contactService