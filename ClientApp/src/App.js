import React, { useState, useEffect } from 'react';

import {
  refreshWidgets, appendWidget,
  replaceWidget, deleteWidget
} from './services/widgets';
import { WidgetTable } from './components/WidgetTable';
import { WidgetForm } from './components/WidgetForm';

export const App = () => {

  const [ widgets, setWidgets ] = useState([]);
  const [ editWidgetId, setEditWidgetId ] = useState(-1);

  const reloadWidgets = () => {
    return refreshWidgets()
      .then(setWidgets)
      .then(() => setEditWidgetId(-1));
  };

  useEffect(() => {
    reloadWidgets();
  }, []);

  const addWidget = (widget) => {

    return appendWidget(widget)
      .then(reloadWidgets);
  };

  const removeWidget = (widgetId) => {
    return deleteWidget(widgetId)
      .then(reloadWidgets);
  };

  const saveWidget = (widget) => {
    return replaceWidget(widget)
      .then(reloadWidgets);
  };

  const cancelWidget = () => setEditWidgetId(-1);

  return (
    <>
      <WidgetTable widgets={widgets} editWidgetId={editWidgetId}
        onEditWidget={setEditWidgetId} onDeleteWidget={removeWidget}
        onSaveWidget={saveWidget} onCancelWidget={cancelWidget} />
      <WidgetForm buttonText="Add Widget" onSubmitWidget={addWidget} />
    </>
  );
};
