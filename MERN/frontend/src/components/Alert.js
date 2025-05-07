export default function Alert({ type = "error", message }) {
  return (
    
    <div className={`p-3 mb-4 rounded ${type === "error" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>
        {message}
    </div>
    
  )
}
