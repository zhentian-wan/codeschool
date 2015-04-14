# Fork based and workflow
## 1.2 Configuring Git

Here's a list of some configuration options we just went over with one part of the git command missing. Make sure your own git configuration is setup the way you want it by selecting any of these commands you find useful.

To check your current username:

     git config --global user.name
	 
To set your username:

	git config --global user.name "Zhentian Wan"
	
To check your email:

	$ git config --global user.email
	
To set your email:

	$ git config --global user.email "answer881215@foxmail.com"
	
To limit pushes to your current branch:

	git config --global push.default simple
	
**To default all new branches to fetch and rebase - not merge:**

	git config --global branch.autosetuprebase always
	
**To record any merge conflict resolutions and reuse them automatically:**

	git config --global rerere.enabled true
	
To colorize git’s output for increased readability:

	git config --global color.ui true
	
**To create a git s alias:**
	
	git config --global alias.s "status -s"
	
**To create a git lg alias:**

	git config --global alias.lg "log --oneline --decorate --all --graph"
	
To configure line endings correctly on Linux/Mac:

	git config --global core.autocrlf input
	
**To configure line endings correctly on Windows:**

	git config --global core.autocrlf true