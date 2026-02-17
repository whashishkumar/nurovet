#!/bin/bash
# Run this from project root: frontend/test-local.sh
# Tests that the Next.js app returns 200 for / and /api/health (no backend required).

set -e
cd "$(dirname "$0")"
PORT=3999

echo "=== Building (API 404s during build are expected; build should still succeed) ==="
npm run build

echo ""
echo "=== Starting server on port $PORT (will run in background for 15s) ==="
PORT=$PORT npm run start &
PID=$!
trap "kill $PID 2>/dev/null || true" EXIT
sleep 8

echo ""
echo "=== Test 1: GET / (home page) ==="
STATUS=$(curl -s -o /tmp/nurovet_test.html -w "%{http_code}" "http://127.0.0.1:$PORT/" || echo "000")
echo "HTTP status: $STATUS"
if [ "$STATUS" = "200" ]; then
  echo "PASS: Home page returned 200"
else
  echo "FAIL: Expected 200, got $STATUS"
  head -c 800 /tmp/nurovet_test.html
  exit 1
fi

echo ""
echo "=== Test 2: GET /api/health ==="
HEALTH=$(curl -s "http://127.0.0.1:$PORT/api/health" || echo "")
echo "$HEALTH"
if echo "$HEALTH" | grep -q '"ok":true'; then
  echo "PASS: Health endpoint OK"
else
  echo "FAIL: Health did not return ok:true"
  exit 1
fi

echo ""
echo "=== All local tests passed ==="
