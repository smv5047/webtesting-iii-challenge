// Test away!
import React from "react"

import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Controls from "./Controls"




  test("Gate defaults to unlocked and open", ()=>{
    const wrapper = rtl.render(<Controls/>)

    expect(wrapper.getByText("Lock Gate"))
    expect(wrapper.getByText("Close Gate"))
  })

//   test("Gate cannot be closed or opened if it is locked", async() =>{
//     const wrapper = rtl.render(<Controls/>)

//     rtl.act(() => {
//         rtl.fireEvent.click(getByText("Close Gate"));
//         });
//     rtl.act(() => {
//         rtl.fireEvent.click(getByText("Lock Gate"));
//         });

//     rtl.findByText("Unlock Gate")

//   })