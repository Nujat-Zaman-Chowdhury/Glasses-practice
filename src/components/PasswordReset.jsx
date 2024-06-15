import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const PasswordReset = () => {
    const {resetPass} = useAuth();
    const [email,setEmail] = useState('')
    const handleSubmit = ()=>{
        resetPass(email)
    }
  return (
    <div>
      <label className="label">
        <a
          onClick={() => document.getElementById("my_modal_2").showModal()}
          href="#"
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </a>
      </label>
      <dialog id="my_modal_2" className="modal">
        <div  className="modal-box">
          <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default PasswordReset;
