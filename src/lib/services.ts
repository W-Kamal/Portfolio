import { supabase } from "./supabaseClient";

export function formatDate(strDate: string): string {
  const date: Date = new Date(strDate);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}


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

// Pour sauvegarder des stats du site et/ou les commentaires
// const postRequest = async (url:string, body:string) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       body
//     })
//   })
//   return await res.json()
// }

