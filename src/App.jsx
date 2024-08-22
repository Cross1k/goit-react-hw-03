import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const InitialState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [list, setList] = useState(InitialState);

  const [filter, setFilter] = useState("");

  const visiblePersons = list.filter((item) =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const deletePerson = (personId) => {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== personId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList list={visiblePersons} onDelete={deletePerson} />
    </div>
  );
}

export default App;
