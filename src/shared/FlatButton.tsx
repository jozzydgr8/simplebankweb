import { FlatButtonType } from "../Types/Types"

export const FlatButton = ({onClick, title}:FlatButtonType)=>{
    return(
        <button className="btn btn-success" onClick={onClick}>
            {title}
        </button>
    )
}