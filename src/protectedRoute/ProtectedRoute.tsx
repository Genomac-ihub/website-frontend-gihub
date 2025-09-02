import useAuth from "../tanstack/useAuth"

const ProtectedRoute = () => {
    const {data}=useAuth()
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute