import styles from "./Actions.module.css"
import * as actionService from '../../services/actionService'
import ActionsSetup from "../ActionsSetup/ActionsSetup"
import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'

function Actions(props) {
  const user = props.user
  const [actions, setActions] = useState([])
  console.log(props, 'props')
  console.log(props.profile.plots, 'plots')
  const handleAddAction = async (actionData, id) => {
    const newAction = await actionService.create(actionData, id)
    setActions([newAction, ...actions])
    console.log(newAction, 'newAction')
  }
  
  const [profile, setProfile] = useState({})
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(user.profile)
      setProfile(profileData)
      console.log('user profile', user.profile)
    }
    fetchProfile()
  }, [user])

  // useEffect(() => {
  //   const fetchAllActions = async () => {
  //     const data = await actionService.index()
  //     console.log('Action Data:', data)
  //   }
  //   fetchAllActions()
  // }, [])

  return (
    <div>
      {profile.plots &&
      profile.plots.map((plot) => {
        return (
        <ActionsSetup key={plot._id} handleAddAction={handleAddAction} plot={plot}/>
        )
      }
      )}

      {/* {profile.plots.map((plot) => {
        <ActionsSetup key={plot._id} plot={plot}/>
      })
    } */}
      <p>Update Action Form will go here</p>
      {/* <p>{props.profile.plot.action}</p> */}
    </div>
  )
  }
export default Actions

