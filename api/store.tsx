// @ts-nocheck
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// on créé un store qui va contenir les filtres et la liste des pokemons
// setFilter et getFilter sont des fonctions qui permettent de modifier le store
// setPokemonList et getPokemonList sont des fonctions qui permettent de modifier le store

// const useStore = create((set) => ({
//   articles: [],
//   setArticles: (articles) => set((state) => ({
//     ...state,
//     articles
//   })),
//   projects: [],
//   setProjects: (projects) => set((state) => ({
//     ...state,
//     projects
//   })),
// }))

let useStore = create((set) => ({
  people: ['John','Jane','Bob'],
  addPerson: (person) => 
    set((state) => ({person:[...state.people, person]})),
  // on ajoute une personne (à people) avec le set(callback qui va modifier le state) et ajouter la personne avec le push à la suite d'un spread operator qui va ajouter la personne à la fin du tableau
}))

export default useStore;

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

let peopleStore = (set) => ({
  people: ['John Doe', 'Jane Doe'],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
})

settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, { name: 'user_settings' })

peopleStore = devtools(peopleStore)

export const useSettingsStore = create(settingsStore)
export const usePeopleStore = create(peopleStore)