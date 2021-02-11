# .bash_profile

1. cd ~

2. `vim .bash_profile`

3. Add alias

```bash
alias ll="ls -laG"
alias git_sync="git pull -r && git push"
```

4. apply changes: `source .bash_profile`

5. To check what the alias does: `$ ll`
 