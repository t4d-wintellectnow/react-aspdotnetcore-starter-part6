import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const WidgetForm = ({ onSubmitWidget, buttonText }) => {

  const [ widgetForm, change, resetWidgetForm ] = useForm({
    name: '',
    color: '',
    quantity: 0,
  });

  const submitWidget = (e) => {
    onSubmitWidget({ ...widgetForm });
    resetWidgetForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="name"
          value={widgetForm.name} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={widgetForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="quantity-input">Quantity:</label>
        <input type="number" id="quantity-input" name="quantity"
          value={widgetForm.quantity} onChange={change} />
      </div>
      <button type="button" onClick={submitWidget}>{buttonText}</button>
    </form>
  );

};

WidgetForm.defaultProps = {
  buttonText: 'Submit Widget',
};

WidgetForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitWidget: PropTypes.func.isRequired,
};