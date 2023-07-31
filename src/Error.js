 import { useRouteError} from "react-router-dom"


//  error page 
const Error = () => {
     const err =  useRouteError();
     console.log(err)


  return (
    <div className="w-3/4 m-auto rounded-2xl shadow-2xl shadow-gray-300 text-center mt-52 p-10 text-2xl font-semibold bg-yellow-50">
    <h1> Welcome to  {err.status} {err.statusText} page</h1>
 <div className="mt-10  mb-10 ">
 <img className="m-auto rounded-2xl w-80 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3f2rQg7ppT7jt4CUvaC9XOsufN7qeVYj-A&usqp=CAU"></img>
 </div>
    
    
    </div>
   
  )
}
  
export default Error;