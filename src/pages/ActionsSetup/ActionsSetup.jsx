import styles from "./ActionSetup.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as actionService from '../../services/actionService'

// Create Actions From
function ActionsSetup(props) {
  console.log(props, 'propsAS')
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
    console.log(target.name, 'name')
    console.log(target.value, 'value')
    console.log(form, 'form')
  }

  const handleSubmit = async(e) => {
    console.log('handleSubmit works')
    console.log(form, 'form')
    e.preventDefault()
    await actionService.create(form, props.plot._id)
    // props.handleAddAction(form, props.plot._id)
    navigate('/actions')
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

        <button>Save</button>
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