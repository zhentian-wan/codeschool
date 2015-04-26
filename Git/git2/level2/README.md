# STAHSING

When you are in the middle working of some file on the branch, but you have to deal with something immediately for the master branch.
So you can use stashing to save the current files and restores last commit.

	git stash save
	
Bring stasshed files back:

	git stash apply
	
Get list of stashes:

	git stash list
	
Apply one of the stashs:

	git stash apply stash@{1} //stash@{0} will be applied by default
	
Drop stashes:

	git stash drop
	
### SHORTCUTS
	
	git stash        ==   git stash save
	git stash apply  ==   git stash apply stash@{0}
	git stash drop 	 ==   git stash drop stash@{0}
	git stash pop    ==   git stash apply
						  git stash drop
						  
### STASH CONFLICTS

Conflicts are possible when applying a stash.
You can commit or reset your local changes, as appropriate.

		git reset --hard HEAD
		
		git stash apply
		
If you use pop command and got conflicts, it won't drop the stash automatically, you need to drop it manually.

	git stash drop


## KEEP INDEX

Let's say you have tow file, one file has been stagged and ready to commit, and another file you want to stashing.
If you just run `git stash save`, you will find both file are stashed.

For this, you can do:

	git stash save --keep index
	
it causes the staging area not to be stashed.


### INCLUDE UNTRACKED

	git stash save --include-untracked
	
causes untracked files to be stashed, too.

### LIST OPTIONS

	git stash list --stat

### STASH SHOW

	git stash show stash@{0}

	git stash show // most recent
	
	git stash show --patch
	
### STASH MESSGES

	git stash save "here is message"

## BRANCHING

	Let's say you are working a branch and then stash some files. After that you delete the branch by mistake.
	
		git stash branch <new_branch_name> stash@{0}
		
## CLEAR STASHES

	git stash clear
	
#In Exercise

###GIT STASH
You're not quite ready to commit what you're working on, but need to make a quick fix to master. Fear not, just stash your current changes so you can switch to master quick.

	git stash save

###GIT STASH LIST
You just finished making those quick changes to master. You're now ready to resume your work on the feature you had started on before you had to fix master. Let's first list all the stashes to make sure we get the right one.

	git stash list
	
###GIT STASH APPLY
Great! As you can see, your stash is in the stash list. Let's apply the stash so you can get back to work.

	git stash apply
	
###GIT STASH DROP
Ok, so now that you have all your stashed changes back, let's clean up the stash list. There's only one stash; go ahead and drop it.

	git stash drop
	
###CONFLICTS
You came back from master and resumed working on your feature, when you realize that you forgot to apply your saved stash. Go ahead and apply it now.

	git stash apply
	
Uh oh! There was a conflict when trying to apply your previous stash. It's no problem, you were just trying things anyway. Go ahead and do a hard reset back to the last commit.

	git reset --hard HEAD
	
###GIT STASH POP
Now that you have the file reset, use the pop command to apply and delete the stash at the same time.

	git stash pop