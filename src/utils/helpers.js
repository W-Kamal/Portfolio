// helpers functions
const getRequest = async (url) => {
  const res = await fetch(url)
  return res.jsont()
}

const postRequest = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body
    })
  })
  return await res.json()
}

const getAllProjects = (apiUrl) => {
  // return getRequest('/projects')
  // return postRequest('/projects' ou apiUrl,{text:'hello'})
}

/**
 * Cette abstraction peut être utile
 * à utiliser dans un useEffect par ex
 * 
 * const [projects, setProjects] = useState([])
 * 
 * const useEffect(()=>{
 *  getAllProjects(url).then(setProjects)
 * }, [])
 * 
 */
