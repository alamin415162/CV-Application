import {useState} from 'react'
import './App.css'

function Sending() {
  return (
    <div className="btns">
      <button type='submit' className="send">Submit</button>
    </div>
  )
}

export default function Sectioning({ className, title, query1, query2, query3, query4 ,setKey}) {
  const [formData, setFormData] = useState({
    entry1: '',
    entry2: '',
    entry3: '',
    entry4: ''

  })
  const [filled, isFilled] = useState(false);

  function handleChange(e) {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })

  }

  function displayed(e) {
    e.preventDefault()
    isFilled(true);
    e.reset()
  }

  function afterSubmit(){
    isFilled(false);
    setKey(prevKey => prevKey + 1);
    console.log("resetted")
  }

  return (
    <form className={className} action="#" onSubmit={displayed}>
      <h2>{title}</h2>
      <div className="entries">
        <label><p>{query1?.que}</p> <input type={query1?.kind} value={formData.entry1} name="entry1" onChange={handleChange} required/></label>
        <label><p>{query2?.que}</p><input type={query2?.kind} value={formData.entry2} name="entry2" onChange={handleChange} /></label>
        <label><p>{query3?.que}</p> <input type={query3?.kind} name="entry3" onChange={handleChange} value={formData.entry3} /></label>
        {query4 && <label><p>{query4?.que}</p> <input type={query4?.kind} name="entry4" value={formData.entry4} onChange={handleChange} /></label>}

      </div>
      <Sending />
      {filled && (<div className="view">
        <p>{`${query1?.que} :  ${formData.entry1}`}</p>
        <p>{`${query2?.que} :  ${formData.entry2}`}</p>
        <p>{`${query3?.que} :  ${formData.entry3}`}</p>
        {query4 && <p>{`${query4?.que} :  ${formData.entry4}`}</p>}
        <button className='closeModal' onClick={afterSubmit}>Close</button>
        <button className='closeModal' onClick={()=> isFilled(false)} >Edit</button>
      </div>)}
    </form>

  )
}