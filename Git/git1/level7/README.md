
# Date Ranges

	  git log --until=1.minute.age
	  git log --since=1.day.ago
	  git log --since=1.hour.ago
	  git log --since=1.month.ago --until=2.weeks.ago
	  git log --since=2000-01-01 --until=2012-12-21
	  
# Earlier commits

	  git diff HEAD^             parent of latest commit
	  git diff HEAD^^            grandparent of latest commit
	  git diff HEAD~5  			 five commits ago
	  git diff HEAD^..HDAD       second most recent commit vs. most recent
	  
	  git diff 5asfawef55eawef..awefawef8545awfag    range of SHAs
	  git diff master bird       diff between tow branches
	  
	  
# BLAME

When you want to see who and when made the change for a certain file, you can use BLAME:

	  git blame index.html --date short
	  
# Excluding files

Sometimes you don't want to share some files, you may need to exclude those files.
For example there is a experiments dir when you commit files, you don't want to include this folder, yuo can do:

	  add that folder into.`git/info/exclude`     
	  experiments              will exclude this folder from git
	  
## Exclude patterns

	  tutorial.mp4             exclude this file
	  *.mp4					   exclude all .mp4 files
	  experiments/
	  logs/*.log			   exclude .log files in logs directory

## Exclude from all copies

Use .gitignore


# REMOVING FILES

Delete the file from your system.

	  git rm README.txt
	  git status
	  git commit -m "Remove readme"
	  
# Untracking files

	  git rm --cached development.log
	  git status   // you will see it show deleted, but actually it won't delete, just untracke it.
	  
# ALIASES

	git config --global alias.s status
	git config --global alias.co checkout
	git config --global alias.br branch
	git config --global alias.ci commit

	