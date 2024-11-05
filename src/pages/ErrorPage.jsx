import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  const navigate =useNavigate()
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen ">
        <h2 className="text-4xl font-bold">404-Page Not Found!</h2>
        <button onClick={()=>navigate("/")} className="btn btn-primary">Go to Home</button>
    </div>
  )
}

export default ErrorPage