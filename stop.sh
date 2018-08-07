#!/bin/bash
app_pid=`ps -ef | grep app.js | head -1 | awk '{print $2}'`
echo kill ${app_pid}
`kill ${app_pid}`
