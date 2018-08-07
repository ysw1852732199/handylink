 app_pid=`ps -ef | grep app.js | head -1 | awk '{print $2}'`
 kill ${app_pid}