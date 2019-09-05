import axios from 'axios';

const baseURL = '/api/widgets';

const getCollectionURL = () => {
  return baseURL;
};

const getElementURL = (elementId) => {
  return `${baseURL}/${encodeURIComponent(elementId)}`;
};

export const refreshWidgets = () => {
  return axios
    .get(getCollectionURL())
    .then(({ data: widgets }) => widgets);
};

export const appendWidget = (widget) => {
  return axios
    .post(getCollectionURL(), widget)
    .then(({ data: widget }) => widget);
};

export const replaceWidget = (widget) => {
  return axios
    .put(getElementURL(widget.id), widget)
    .then(({ data: widget }) => widget);
};

export const deleteWidget = (widgetId) => {
  return axios
    .delete(getElementURL(widgetId))
    .then(({ data: widget }) => widget);
};