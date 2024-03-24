





export default function Input({type,fieldName,name,handleInput}){
    return (
    <div className="form-group mb-4">
          <label >{fieldName}</label>
          <input onChange={handleInput} type={type} className="form-control" id={fieldName} aria-describedby={fieldName} placeholder={`Enter your ${fieldName}`} name={name} />
        </div>
    )
}