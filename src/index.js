import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store/index";

const colors = {
    button: {
        disabled: "",
        abled: "",
    },
    text: {
        active: "",
        not_active: "",
    },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <ChakraProvider theme={theme}>   
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>  
        </BrowserRouter>
    </ChakraProvider> 
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
