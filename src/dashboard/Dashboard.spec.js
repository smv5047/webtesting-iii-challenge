// Test away
import React from "react"

import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Dashboard from "./Dashboard"


test("<App /> snapshot ", () => {
    const wrapper = rtl.render(<Dashboard />);

    expect(wrapper.asFragment()).toMatchSnapshot()
  });




//   - when `locked` or `closed` use the `red-led` class
//   - when `unlocked` or `open` use the `green-led` class

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", async() =>{
    const wrapper = rtl.render(<Dashboard/>)

    await wrapper.findAllByText(/close/i)

    const closed = wrapper.getByText(/close/i)

    rtl.act(() => {
        rtl.fireEvent.click(closed);
        });

    rtl.findByText("Open Gate")
    

})


test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", async() =>{
    const wrapper = rtl.render(<Dashboard/>)

    await wrapper.findAllByText(/close/i)

    const closed = wrapper.getByText(/close/i)

    const lock = wrapper.getByText(/lock gate/i)

    rtl.act(() => {
        rtl.fireEvent.click(closed);
        });

    

    rtl.act(() => {
        rtl.fireEvent.click(lock);
        });

    rtl.findByText("Unlock Gate")

})

// test("when `locked` or `closed` use the `red-led` class", () =>{
//     const wrapper = rtl.render(<Dashboard/>)

//     const closed = wrapper.get


//     expect(closed.firstChild).toHaveClass('red-led')
    

// })