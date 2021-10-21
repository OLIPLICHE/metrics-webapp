export const ActionStatus = {
  STARTED: 'STARTED',
  SUCCESSFUL: 'SUCCESSFUL',
  FAILED: 'FAILED',
};

export const createAction = (type, payload, status) => ({ type, payload, status });
export const createActionStarted = (type, payload) => createAction(
  type,
  payload,
  ActionStatus.STARTED,
);
export const createActionSuccessful = (type, payload) => createAction(
  type,
  payload,
  ActionStatus.SUCCESSFUL,
);
export const createActionFailed = (type, payload) => createAction(
  type,
  payload,
  ActionStatus.FAILED,
);
