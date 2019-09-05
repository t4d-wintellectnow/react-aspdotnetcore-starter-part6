import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import { widgetPropType } from '../propTypes/widgets';
import { useForm } from '../hooks/useForm';

export const WidgetEditRow = ({
  widget,
  onSaveWidget,
  onCancelWidget: cancelWidget,
}) => {

  const [ widgetForm, change ] = useForm(
    pick(widget, ['name', 'color', 'quantity']));

  const saveWidget = () => {

    onSaveWidget({
      ...widgetForm,
      id: widget.id,
    });

  };

  return (
    <tr>
      <td>{widget.id}</td>
      <td><input type="text" id="edit-widget-name-input" name="name"
          value={widgetForm.name} onChange={change} /></td>
      <td><input type="text" id="edit-widget-color-input" name="color"
          value={widgetForm.color} onChange={change} /></td>
      <td><input type="number" id="edit-widget-quantity-input" name="quantity"
          value={widgetForm.quantity} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveWidget}>Save</button>
        <button type="button" onClick={cancelWidget}>Cancel</button>
      </td>
    </tr>    
  )

};

WidgetEditRow.propTypes = {
  widget: widgetPropType.isRequired,
  onSaveWidget: PropTypes.func.isRequired,
  onCancelWidget: PropTypes.func.isRequired,
};

