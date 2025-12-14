# Vote Reset Testing Guide

## Setup Verification

1. **Check environment variables are set:**
   ```bash
   # In .env.local
   VOTE_RESET_SECRET=dev-reset-secret-2024
   NEXT_PUBLIC_VOTE_RESET_SECRET=dev-reset-secret-2024
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open browser console** (F12 or Cmd+Opt+I)

## Testing the Console Helper

### Test 1: Verify helper is loaded
When the page loads, you should see in the console:
```
🛠️  Dev helpers loaded. Try: await window.resetVotes("ui-systems")
```

### Test 2: Reset UI Systems votes
```javascript
await window.resetVotes('ui-systems')
```

**Expected output:**
```
🔄 Resetting votes for domain: ui-systems...
✅ Votes reset successfully for domain: ui-systems
🔄 Refresh the page to see updated counts
```

### Test 3: Reset Package Managers votes
```javascript
await window.resetVotes('package-managers')
```

**Expected output:**
```
🔄 Resetting votes for domain: package-managers...
✅ Votes reset successfully for domain: package-managers
🔄 Refresh the page to see updated counts
```

### Test 4: Invalid domain (should still work, just resets empty hash)
```javascript
await window.resetVotes('non-existent-domain')
```

**Expected output:**
```
🔄 Resetting votes for domain: non-existent-domain...
✅ Votes reset successfully for domain: non-existent-domain
🔄 Refresh the page to see updated counts
```

### Test 5: Missing domain parameter
```javascript
await window.resetVotes('')
```

**Expected output:**
```
❌ Domain is required
Error: Domain parameter is required
```

## Manual API Testing (Optional)

You can also test the API endpoint directly:

```bash
curl -X POST http://localhost:3000/api/vote/reset \
  -H "Content-Type: application/json" \
  -d '{"domain":"ui-systems","secret":"dev-reset-secret-2024"}'
```

**Expected response:**
```json
{"ok":true}
```

### Test invalid secret:
```bash
curl -X POST http://localhost:3000/api/vote/reset \
  -H "Content-Type: application/json" \
  -d '{"domain":"ui-systems","secret":"wrong-secret"}'
```

**Expected response (401):**
```json
{"error":"Invalid secret"}
```

## Workflow Test

1. **Cast some votes:**
   - Navigate to `/topic/ui-systems`
   - Click "Support" on a few libraries
   - Note the vote counts

2. **Reset votes:**
   ```javascript
   await window.resetVotes('ui-systems')
   ```

3. **Refresh the page**
   - All vote counts should be back to 0
   - Your localStorage support state is preserved (buttons still show "Remove" if you supported them)

4. **Click "Remove" on previously supported options**
   - This will decrement from 0 to -1 (expected behavior)
   - Reset again to clean up negative votes if needed

## Production Deployment Notes

**For Vercel:**
1. Add environment variables in Vercel dashboard:
   - `VOTE_RESET_SECRET` = generate a secure random string
   - `NEXT_PUBLIC_VOTE_RESET_SECRET` = same value

2. The console helper will work in production
3. Only people with access to the secret can reset votes
4. Consider removing or securing this in true production use

## Troubleshooting

**"Reset secret not configured"**
- Check that `.env.local` has both `VOTE_RESET_SECRET` and `NEXT_PUBLIC_VOTE_RESET_SECRET`
- Restart the dev server after adding env vars

**"Invalid secret" (401)**
- Server and client secrets don't match
- Check both env vars are identical

**"window.resetVotes is not a function"**
- DevHelperInjector not loaded
- Check that it's included in `layout.tsx`
- Hard refresh the page (Cmd+Shift+R)
