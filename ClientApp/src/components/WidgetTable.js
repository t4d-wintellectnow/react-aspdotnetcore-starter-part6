import React from 'react';
import PropTypes from 'prop-types';

import { widgetsPropType } from '../propTypes/widgets';

import { WidgetViewRow } from './WidgetViewRow';
import { WidgetEditRow } from './WidgetEditRow';

export const WidgetTable = ({
  widgets, editWidgetId,
  onEditWidget: editWidget,
  onDeleteWidget: deleteWidget,
  onSaveWidget: saveWidget,
  onCancelWidget: cancelWidget,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {widgets.map(widget => widget.id === editWidgetId
          ? <WidgetEditRow key={widget.id} widget={widget}
            onSaveWidget={saveWidget} onCancelWidget={cancelWidget} />
          : <WidgetViewRow key={widget.id} widget={widget}
            onEditWidget={editWidget} onDeleteWidget={deleteWidget} />)}
      </tbody>
    </table>
  );

};

WidgetTable.defaultProps = {
  widgets: [],
  editWidgetId: -1,
};

WidgetTable.propTypes = {
  widgets: widgetsPropType,
  editWidgetId: PropTypes.number,
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onSaveWidget: PropTypes.func.isRequired,
  onCancelWidget: PropTypes.func.isRequired,
};