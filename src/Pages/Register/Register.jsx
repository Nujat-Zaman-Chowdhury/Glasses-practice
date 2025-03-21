
import { Link ,useNavigate,useLocation} from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
  const {googleLogin,githubLogin,twitterLogin,facebookLogin} = useAuth();
    const {createUser,updateUserProfile} = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location?.state || '/'

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email,password,name,image} = data;
        createUser(email,password)
        .then(result => {
          updateUserProfile(name,image)
          .then(()=>navigate(from))
          
        })
        .catch(error=>{
            console.log(error.message);
        })
      }

      const handleSocialLogin = (socialProvider)=>{
        socialProvider()
        .then(result=>{
            if(result.user){
                navigate(from)
            }
        })
        .catch(error=>{
            console.log(error);
        })
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  {...register("name", { required: true })} placeholder="Enter your name" name="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-500 py-2">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered"
          {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 py-2">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" placeholder="Image Url" name="image" className="input input-bordered"
          {...register("image")}  />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered"
          {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 py-2">This field is required</span>}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account?<Link to="/login" className="text-blue-500"> Login</Link></p>
      </form>
      <div className="divider">Continue with</div>
      <div className="flex items-center gap-3 justify-center p-5">
      <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline border border-red-400">Google</button>
      <button onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-outline border border-green-400">Github</button>
      <button onClick={()=>handleSocialLogin(twitterLogin)} className="btn btn-outline border border-blue-400">Twitter</button>
      <button onClick={()=>handleSocialLogin(facebookLogin)} className="btn btn-outline border border-orange-400">Facebook</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Register;