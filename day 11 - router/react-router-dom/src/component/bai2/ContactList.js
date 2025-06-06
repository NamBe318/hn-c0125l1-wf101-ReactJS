
function ContactList({contacts}) {
    return(
        <div>
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name} - {contact.id}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ContactList;