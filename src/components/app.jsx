import React,{useState} from "react";
import Header from "./header"
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";


function App() {

    const [notes, setNotes] = useState([])


    function addNotes(inputText){
        setNotes((preNotes) => {
            return [...preNotes, inputText]
        });

    }

    function deleteNote(id){
        setNotes((preValue) => {
           return preValue.filter((note, index) =>{
                return index !== id;
            });
        });
    }




    return <div>
    <Header />
    <CreateArea onAddClick={addNotes}/>
    {notes.map((singleNote, index) => {
        return (
        <Note 
        key={index} 
        id={index} 
        title={singleNote.title} 
        content={singleNote.content}
        clickDelete={deleteNote}

        />
        )
    })}
    <Footer />
    
    </div>
}



export default App;