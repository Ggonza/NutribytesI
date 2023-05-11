import React from 'react'
import {ToastContainer} from "react-toastify";
import { Navigation } from "./routes"

export default function App (){
    return(
      <div>
          <Navigation/>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
      </div>
    );
}