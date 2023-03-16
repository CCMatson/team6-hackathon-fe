import styles from "./ActionSetup.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Create Actions From
function ActionsSetup(props) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAction = {name: form.name}
    props.handleAddAction(newAction, props.plot._id)
    setForm({ name: ''})
    props.setPlot({...props.plot, actions:[..props.plot.actions, newAction]})

    navigate('/actions')
  }

  if (!props.plot.actions) return
  return (
    <>
      <h4>{props.plot.name}</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <label
            htmlFor="name-input">
            Name
          </label>
          <input
            required
            id="name-input"
            autoComplete="off"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          >
          </input>
        </div>

        <button type="submit">Save</button>
      </form>
      {props.plot.actions.map((action) => {
        return (
          <p key={index}> {action.name}</p>
        )
      })
      }
    </>

  )
}

export default ActionsSetup
