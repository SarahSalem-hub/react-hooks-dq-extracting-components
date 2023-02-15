import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact";
import Message from "./Message";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contacts.map((memeber) => {
            return <Contact name={memeber.name} key={memeber.id} />;
          })}
        </ul>
      </nav>
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  type={message.type}
                  name={message.name}
                  content={message.content}
                />
              );
            })}
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
