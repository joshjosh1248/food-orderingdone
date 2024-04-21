import { useEffect, useState } from "react";
import ImageUpload from "../../components/image-upload";
import EditableImage from "./EditableImage";


export default function MenuItemForm({onSubmit,menuItem}){

    const [image,setImage] =useState(menuItem?.image || '');
    const [name,setName]= useState(menuItem?.name || '');
    const [description,setDescription]= useState(menuItem?.description || '');
    const [price,setPrice]=useState(menuItem?.price || '');
    const[ quantity,setQuantity]=useState(menuItem?.quantity || '');
    const[categories,setCategories] =useState([]);
    const[category,setCategory] = useState(menuItem?.category || '');

useEffect(() =>{
    fetch('/api/categories').then(res =>{
        res.json().then(categories=>{
            setCategories(categories);
        });
    });
}, []);

    return(
        <form 
        onSubmit={ev => onSubmit(ev,{image,name,description,price,quantity,category,})} 
        className="mt-8 max-w-2xl mx-auto">
            <div 
            className="grid items-start gap-4"
            style={{gridTemplateColumns: '.3fr .7fr'}}>
        <div>
        <EditableImage link={image} setLink={setImage} />
        </div>
            <div className="grow">
            <label>Item name</label>
            <input
             type="text"
             value={name} 
             onChange={ev => setName(ev.target.value)}  />

            <label>Description</label>
            <input 
            type="text"
            value={description} 
            onChange={ev => setDescription(ev.target.value)} />

            <label>Category</label>
            <select value={category} onChange={ev => setCategory(ev.target.value)}>
                {categories?.length >0 && categories.map(c => (
                <option value={c._id}>{c.name}</option>))}
            </select>

            <label>Price</label>
            <input 
            type="text"
            value={price} 
            onChange={ev =>setPrice(ev.target.value)}/>

            <label>Quantity</label>
            <input 
            type="text"
            value={quantity} 
            onChange={ev =>setQuantity(ev.target.value)}  />

            <button type="submit">Save</button>
            </div>
            </div>
        </form>
    )
}