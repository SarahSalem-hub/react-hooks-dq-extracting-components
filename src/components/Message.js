
function Message({name, type, content}){
    return(
        <li className={`message ${type}`}>
            <div className="icon">{name.charAt(0)}</div>
            <span className="content">{content}</span>
      </li>
    )
}
export default Message