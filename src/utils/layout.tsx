import { PropsWithChildren } from "react"

type Props = PropsWithChildren 

export const Wrapper = ({ children }: Props) => {
  return (
    console.log(`test : `, children)
  )
}
export const Card = ({ children }: Props) => {
  return (
    console.log(`test : `, children)
  )
}
export const Slider = ({ children }: Props) => {
  return (
    console.log(`test : `, children)
  )
}
