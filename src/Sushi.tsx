import styled from "styled-components"
import type { Sushi } from "./App"

const Mybutton = styled.button`

`

export default function Sushi(info: Sushi) {
  
  return (
    <>
      <p>oi{info.name}</p>
      <Mybutton onClick={() => {}}>
          info.name{info.count}
      </Mybutton>
    </> 
  )
}
