'use client';
import { useState } from "react";
import EditableImage from "../../components/layout/EditableImage";
import { useProfile } from "../UseProfile";


export default function UserForm({user,onSave}){

    const [userName, setUserName] = useState(user?.name || '');
    const [image,setImage]=useState(user?.image || '');
    const [admin, setAdmin] =useState(user?.admin || false);
    const {data:loggedInUserData} =useProfile();
    



    return(
        <div className="flex gap-4 items-center">
        <div> 
            <div className="p-2 rounded-lg relative">
        
          <EditableImage  link={image} setLink={setImage}/>
        
        </div>
    </div>
    <form className="grow" 
    onSubmit={ev =>
    onSave(ev,{
      name:userName,image,admin,})
      }>
        <label>
            Name:
        </label>
        <input type="text" placeholder="First and last name"
        value={userName} onChange={ev =>setUserName(ev.target.value)}/>

<label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={'email'}
        />
      {loggedInUserData.admin && (
        <div>
        
            <label className="p-2 inline-flex items-center gap-2 border mb-2" htmlFor="adminCb">
            <input id="adminCb" type="checkbox" className="" value={'1'}
            checked={admin}
            onClick={ev => setAdmin(ev.target.checked)} />  
            <span>Admin</span>
            </label>
        </div>
      )}
        <button type="submit">Save</button>
    </form>
    </div>
    )
}