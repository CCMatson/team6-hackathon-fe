import styles from "./ActionSetup.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Create Actions From
function ActionsSetup(props) {
  console.log(props, 'propsInActionSetUp')
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
    console.log(target.name, 'name')
    console.log(target.value, 'value')
  }

  const handleSubmit = ({ e }) => {
    e.preventDefault()
    props.handleAddAction(form, props.plot._id)
    console.log()
    navigate('actions')
  }

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
          <p> {action.name}</p>
        )
      })
      }
    </>

  )
}

export default ActionsSetup