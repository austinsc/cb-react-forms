import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Builder from "./src/components/FormBuilder";
import Generator from "./src/components/FormGenerator";
import store from "./src/store";

import "react-rangeslider/lib/index.css";
//import './css/font-awesome.min.css';
//import "./css/bootstrap.min.css";
import "./src/App.scss";





const FormBuilder = ({ onSubmit, items, id }) => (
  <Provider store={store}>
		<input type="hidden" id={id} />
    <Builder
			onSubmit={x => document.getElementById(id).value = x}
      items={items}
    />
  </Provider>
)

const FormGenerator = ({
	formData,
	responseData,
	readOnly,
	onSubmit
}) => (
  <Provider store={store}>
    <Generator
      formData={formData}
      responseData={responseData}
      readOnly={readOnly}
      onSubmit={onSubmit}
    />
  </Provider>
)


const Example = props => (
	<FormBuilder
		onSubmit={console.dir}
		id="poop"
	/>
);

ReactDOM.render(<Example />, document.getElementById("root"));

export { FormBuilder, FormGenerator }
