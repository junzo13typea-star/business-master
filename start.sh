#!/bin/bash
# Shindanshi Study App Startup Script
cd "$(dirname "$0")"

PID=$(lsof -ti :8766 2>/dev/null)
if [ -n "$PID" ]; then
  kill -9 $PID 2>/dev/null
  sleep 1
fi

/usr/bin/python3 server.py
