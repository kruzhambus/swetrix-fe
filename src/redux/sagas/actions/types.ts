const sagaTypes = Object.freeze({
  LOAD_EXTENSIONS: 'LOAD_EXTENSIONS',
  LOAD_PROJECTS: 'LOAD_PROJECTS',
  LOAD_METAINFO: 'LOAD_METAINFO',
  LOAD_USAGEINFO: 'LOAD_USAGEINFO',
  LOAD_SHARED_PROJECTS: 'LOAD_SHARED_PROJECTS',
  LOAD_PROJECT_ALERTS: 'LOAD_PROJECT_ALERTS',
  LOGIN_ASYNC: 'LOGIN_ASYNC',
  SIGNUP_ASYNC: 'SIGNUP_ASYNC',
  EMAIL_VERIFY_ASYNC: 'EMAIL_VERIFY_ASYNC',
  UPDATE_USER_PROFILE_ASYNC: 'UPDATE_USER_PROFILE_ASYNC',
  DELETE_ACCOUNT_ASYNC: 'DELETE_ACCOUNT_ASYNC',
  SHARE_VERIFY_ASYNC: 'SHARE_VERIFY_ASYNC',
  LOGOUT: 'LOGOUT',
  AUTH_SSO: 'AUTH_SSO',
  LINK_SSO: 'LINK_SSO',
  UNLINK_SSO: 'UNLINK_SSO',
})

export default sagaTypes
