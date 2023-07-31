
import Footer from "../src/Footer"

import { render } from "@testing-library/react";
import React from "react"
import { StaticRouter } from "react-router-dom/server"

test(" Footer section load on every page  ", () => {

    const footerr = render(
        <StaticRouter>
            <Footer />
        </StaticRouter>
    )



 const footerSection = footerr.getByTestId("footer-test")




  expect(footerSection.innerHTML).toBe("<h2> Developed by 💛 Krishna kumar</h2>");




})