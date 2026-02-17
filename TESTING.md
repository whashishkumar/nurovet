# How the app was tested (and how you can run the same test)

## What was run here

1. **Build**
   ```bash
   cd frontend && npm run build
   ```
   - Build completes successfully. You will see "API Error: ... 404" lines during static generation (API is not running during build). Those are caught by `safe()` so the build does not fail.

2. **Start**
   ```bash
   cd frontend && PORT=3999 npm run start
   ```
   (Or `npm run start` for default port 3000.)

3. **Requests**
   - **Home:** `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3999/` → **200**
   - **Health:** `curl -s http://127.0.0.1:3999/api/health` → `{"ok":true,"app":"nurovet-frontend",...}`

So in this environment, when the Next app is running and you request `/` and `/api/health`, the response is **200** and the health JSON, not 500 or "file not found".

## Run the same test yourself

**Option A – script (build + start + curl):**
```bash
cd /data/home/website_user/nurovet/frontend
chmod +x test-local.sh
./test-local.sh
```
You should see "PASS" for home and health, and "All local tests passed".

**Option B – manual:**
```bash
cd frontend
npm run build
npm run start
# In another terminal:
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000/
curl -s http://127.0.0.1:3000/api/health
```
Expect: first line `200`, second line JSON with `"ok":true`.

## If you still see 500 or "file not found" on the live site

- The app code was verified to return **200** when run with `next start` and requested with `curl` as above.
- So if **https://nurovet.com/** returns 500 or "file not found", the cause is almost certainly **how the site is run or served in production**, for example:
  - The process that runs Next (e.g. `next start`, PM2, Docker) is not the one receiving requests.
  - Nginx/Apache document root or proxy target is wrong (not pointing at the Next app).
  - A different build or env is used in production (e.g. missing `NEXT_PUBLIC_API_URL` or wrong value).
- Run `./test-local.sh` (or the manual steps) **on the same machine or image** that serves production. If that passes but the live site still returns 500, the problem is in the web server / reverse proxy / routing config, not in the Next app code.
