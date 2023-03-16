import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/actions`

const create = async (formData, id) => {
  console.log(formData, 'formData')
  console.log(id, "id")
  try{
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch(error) {
    console.log(error)
  }
}

export {
  create
}