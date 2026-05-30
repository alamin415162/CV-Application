import { useState } from 'react'
import './App.css'
import Sectioning from './component';

export default function App() {
  const [key, setKey] = useState(0);
  const [key1, setKey1] = useState(10);
  const [key2, setKey2] = useState(20);
  
  return (
    <div className="page">
      <header>
      </header>
      <div className="main">
        {/* <Information key="info" />
        <Education key="edu" />
        <Experience key="exp" /> */}

        <Sectioning
          key= {key}
          setKey={setKey}
          className="info"
          title="General Information"
          query1={{ que: "First Name", kind: "text" }}
          query2={{ que: "Last Name", kind: "text" }}
          query3={{ que: "Email", kind: "email" }}
          query4={{ que: "Phone", kind: "tel" }}
        />

        <Sectioning
          key={key1}
          setKey={setKey1}
          className="edu"
          title="Education Experience"
          query1={{ que: "School Name", kind: "text" }}
          query2={{ que: "Title of Study", kind: "text" }}
          query3={{ que: "Date of Study", kind: "date" }}
        />
        <Sectioning
          key={key2}
          setKey={setKey2}
          className="edu"
          title="Working Exprience"
          query1={{ que: "Company Name", kind: "text" }}
          query2={{ que: "Title of Position", kind: "text" }}
          query3={{ que: "Starting Date", kind: "date" }}
          query4={{ que: "Finishing Date", kind: "date" }}
        />



      </div>
      <footer>
      </footer>
    </div>
  )
}

