// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/** Optional values :
 * tools_stack:[
 *  "Figma",
 *  "AdobeXD",
 *  "Canvas",
 *  "Redux",
 *  "Redux Toolkit",
 *  "Recharts",
 *  "JsDoc",
 *  "LightHouse",
 *  "",
 *  "",
 *  "",
 * ]
 * front_stack:["React",
 *  "CRA",
 *  "Vite",
 *  "JS",
 *  "HTML",
 *  "CSS",
 *  "",
 *  "",
 *  "",
 *  "",
 *  "",
 *  ""
 * ];
 * back_stack:[
 *  "Node.js",
 *  "Express",
 *  "",
 *  "",
 *  "",
 *  "",
 *  "",
 *  ""
 * ];
 * 
 */

export interface Data {
  id:              number;
  title:           string;
  description:     string;
  thumbnail_path:  string;
  created_at:      Date;
  started_date:    Date;
  ended_date:      Date;
  front_stack:     "React" | "Vite" | "JS";
  back_stack:      "Node.js";
  type:            [];
  status:          string;
  purpose:         string;
  is_published:    boolean;
  repository_path: string;
  demo_path:       string;
  devGarden_path:  string;
  comments:        string;
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ title: 'John Doe' })
}



export {}

/**
 * SUPABASE TABLES
 * 
 * dev_logs : articles that will be written during development.
 * ext_ressources : links of ressources that will be used in to write articles.
 * images : images that will be used to present myself, projects and articles.
 * projects : list of projects that will be presented in the website.
 * comments : list of comments that will be written any message features.
 * traductions : list of traductions of all contents in the website.
 * urls : list of urls of projects or articles.
 */

/**
 * get all projects from supabase table
 */

/**
 * get all urls for a given project from supabase table
 */

/**
 * get dev_logs from supabase table for a given project
 */

/**
 * get images from supabase table for a given project
 */

/**
 * get all comments for a given project from supabase table
 */
/**
 * get localizations of descriptions/name/alt/purpose from supabase table for a given project
 */

// build a json file for each project with all the data needed to build the website




// helpers functions
const getRequest = async (url) => {
  const res = await fetch(url)
  return res.json()
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
