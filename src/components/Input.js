import React from "react";
import cx from "classnames";
import { ErrorMessage } from "@hookform/error-message";

const Container = ({ children, plain, errors, name }) =>
  plain ? (
    <>{children}</>
  ) : (
    <div
      className={cx("form-group", {
        "has-errors": errors[name],
      })}
    >
      {children}
    </div>
  );

const Input = (props) => {
  const {
    type = "text",
    name,
    id = name,
    label,
    methods,
    rules = {},
    className,
    onChange,
    helpText,
    plain,
    ...rest
  } = props;
  const {
    register,
    formState: { errors },
  } = methods;

  const defaultProps = {
    type,
    name,
    id,
    placeholder: " ",
    className: cx("form-control"),
  };

  return (
    <Container plain={plain} {...props} errors={errors}>
      <input {...defaultProps} {...rest} {...register(name, rules)} />

      <label
        htmlFor={name}
        className={cx(
          "absolute duration-300 px-2 top-3 left-2 -z-1 origin-0 text-gray-500 bg-white"
        )}
      >
        {label}
      </label>
      {helpText && <small className="text-gray-500 text-xs">{helpText}</small>}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className="text-xs text-red-600" id="error">
            {message}
          </div>
        )}
      />
    </Container>
  );
};

export default Input;
