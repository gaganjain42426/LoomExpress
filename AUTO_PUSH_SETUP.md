# Auto-Push to GitHub - Setup Guide

This repository is configured to automatically push changes to GitHub. Here are your options:

## Option 1: Manual Push (Reliable)
Push changes whenever you want:
```bash
npm run push
```

Or commit and push together:
```bash
npm run commit:push
```

Or use git commands directly:
```bash
git add .
git commit -m "Your message"
git push origin main
```

## Option 2: Git Hooks (Automatic)
A post-commit hook is configured in `.githooks/post-commit` to automatically push after every commit.

**For Windows with Git Bash:**
The hook will run automatically after `git commit`.

**For Windows with PowerShell:**
After committing, the auto-push should trigger automatically.

**For Mac/Linux:**
The hook is ready to use.

**Test the hook:**
```bash
git commit -m "Test commit"
# Should automatically push to GitHub
```

## Option 3: VS Code Integration
In VS Code, after making changes:
1. Click the Source Control icon (Ctrl+Shift+G)
2. Stage changes
3. Enter commit message
4. Click "Commit & Push" button

This will commit and push in one action.

## Troubleshooting

**Hook not running?**
- The git hook may not execute on Windows with certain git configurations
- Use `npm run commit:push` instead as a reliable alternative

**Authentication issues?**
- Make sure you have SSH keys configured or a personal access token set up
- Run: `git config credential.helper store` to save credentials

**Check hook status:**
```bash
git config core.hooksPath
# Should output: .githooks
```

## Recommended Workflow

1. Make changes to your files in VS Code
2. When ready to save to GitHub, run:
   ```bash
   npm run commit:push
   ```
   OR
   ```bash
   git add . && git commit -m "describe your changes" && git push
   ```

3. Verify the push succeeded by checking GitHub

---

**Need to push specific files?**
```bash
git add src/components/YourComponent.tsx
git commit -m "Update YourComponent"
git push origin main
```
