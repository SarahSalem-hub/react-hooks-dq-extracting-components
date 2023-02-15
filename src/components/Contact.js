

function Contact({name}){
    return(
        <li className="contact">
            <div className="icon">{name.charAt(0)}</div>
            {name}
          </li>
    )

}
export default Contact;