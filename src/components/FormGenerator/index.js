import React from "react";
import PropTypes from "prop-types";
import ValidatedFormInputs from "./ValidatedFormInputs";

const Generator = ({
  onSubmit,
  readOnly,
  formData,
  responseData
}) => (
  <div className="demo-form">
    <div
      className=" mt-2 mx-auto"
    >
      <ValidatedFormInputs
        formData={formData}
        responseData={responseData}
        onSubmit={onSubmit}
        readOnly={readOnly}
      />
    </div>
  </div>
  );

Generator.propTypes = {
  formData: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseData: PropTypes.object,
  readOnly: PropTypes.bool
};

Generator.defaultProps = {
  readOnly: false
};

export default Generator;
