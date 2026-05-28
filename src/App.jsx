import { useState } from 'react'
import './App.css'

// function Information() {
//   const[firstName, setFirstName] = useState('');

//   function handleFirstName(){
    
//   }
//   return (
//     <div className="info">
//       <h2>General Information</h2>



//       <form action="#" className="entries">
//         <label htmlFor="firstName"><span>First Name</span><input type="text" id="firstName" /></label>
//         <label htmlFor="lastName"><span>Last Name</span> <input type="text" id="lastName" /></label>
//         <label htmlFor="email"><span>Email</span><input type="email" id="email" /></label>
//         <label htmlFor="phone"><span>Phone</span><input type="number" id="phone" /></label>
//         <div className="btns">
//           <button className="fix">Edit</button>
//           <button type="submit" className="send">Submit</button>
//         </div>
//       </form>


//     </div>
//   )
// }

// function Education() {
//   return (
//     <div className="education">
//       <h2>Educational Experience</h2>
//       <div className="entries">
//         <label htmlFor="school"><span>School Name</span><input type="text" id="school" /></label>

//         <label htmlFor="title"><span>Title of Study</span> <input type="text" id="title" /></label>

//         <label htmlFor="date"><span>Date of Study</span><input type="date" id="date" /></label>

//       </div>
//       <div className="btns">
//         <button className="fix">Edit</button>
//         <button className="send">Submit</button>
//       </div>
//     </div>
//   )
// }

// function Experience() {
//   return (
//     <div className="exp">
//       <h2>Work Experience</h2>
//       <div className="entries">
//         <label htmlFor="company">
//           <span>Company Name </span><input type="text" id="company" />
//         </label>

//         <label htmlFor="position"><span>Position Title</span> <input type="text" id="position" /></label>

//         <label htmlFor="startDate"><span>From</span><input type="date" id="startDate" /></label>

//         <label htmlFor="endDate"><span>To</span> <input type="date" id="endDate" /></label>
//       </div>
//       <div className="btns">
//         <button className="fix">Edit</button>
//         <button className="send">Submit</button>
//       </div>
//     </div>
//   )
// }

function Display(){

  return (
    <div className="view">
      
    </div>
  )
}



function Edit() {
  return (
    <div className="btns">
      <button className="fix">Edit</button>
      <button type='submit' className="send">Submit</button>
    </div>
  )
}

function Sectioning({className, title, query1, query2, query3, query4}) {
  return (
      <div className={className}>
        <h2>{title}</h2>
        <div className="entries">
          <label><p>{query1?.que}</p> <input type={query1?.kind} /></label>
          <label><p>{query2?.que}</p><input type={query2?.kind} /></label>
          <label><p>{query3?.que}</p> <input type={query3?.kind} /></label>
          {query4 && <label><p>{query4?.que}</p> <input type={query4?.kind} /></label>}
          
        </div>
      </div>
      
  )
}
function App() {
  return (
    <div className="page">
      <header>
      </header>
      <form action="#" className="main" onSubmit={() => console.log("form submitted")}>
        {/* <Information key="info" />
        <Education key="edu" />
        <Experience key="exp" /> */}

        <Sectioning 
        className="info" 
        title="General Information" 
        query1= {{que: "First Name", kind: "text"}}
        query2={{que:"Last Name", kind: "text"}}
        query3={{que: "Email", kind: "email"}}
        query4={{que: "Phone", kind: "tel"}}
        
        />

        <Sectioning 
        className="edu"
        title="Education Experience"
        query1={{que: "School Name", kind: "text" }}
        query2={{que: "Title of Study", kind:"text"}}
        query3={{que: "Date of Study", kind: "date"}}
        />
        <Sectioning 
        className="edu"
        title="Working Exprience"
        query1={{que: "Company Name", kind: "text" }}
        query2={{que: "Title of Position", kind:"text"}}
        query3={{que: "Starting Date", kind: "date"}}
        query4={{que: "Finishing Date", kind: "date"}}
        />


        <Edit />
      </form>
      <footer>
      </footer>
    </div>
  )
}

export default App
