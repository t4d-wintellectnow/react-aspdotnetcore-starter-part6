import React from 'react';
import PropTypes from 'prop-types';

import { widgetPropType } from '../propTypes/widgets';

export const WidgetViewRow = ({
  widget,
  onEditWidget: editWidget,
  onDeleteWidget: deleteWidget,
}) => {

  return (
    <tr>
      <td>{widget.id}</td>
      <td>{widget.name}</td>
      <td>{widget.color}</td>
      <td>{widget.quantity}</td>
      <td>
        <button type="button" onClick={() =>
            editWidget(widget.id)}>Edit</button>
        <button type="button" onClick={() =>
            deleteWidget(widget.id)}>Delete</button>
      </td>
    </tr>    
  )

};

WidgetViewRow.propTypes = {
  widget: widgetPropType.isRequired,
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
};

