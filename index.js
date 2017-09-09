const Raven = require("raven");
const SessionManager = require("./js/sessionManager");
const fs = require("fs");
// sentry crash reporting.
const RAVEN_URL = require("./config").RAVEN_URL;

Raven.config(RAVEN_URL).install();

const sessionManager = new SessionManager("dbus");
