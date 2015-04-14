# Level 1 Section 1 Fork based and workflow
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
	
# Level 1 Section 2 Forking and Cloning

Difference between Forking and Cloning:

**Case 1:**
  If you create a repo, you can clone to the desktop and do **commit** and **push** operations.
  
**Case 2:**
  If you co-worker create a repo and add you as a collaborator, you also can do **commit** and **push** operations.

**Case 3:**
  If someone create a repo but did **NOT** add you as a collaborator, you still can clone to your desktop, but this time you can only **commit** but not **push**.

# Level 1 Section 3 Submitting a Pull Request
## Pull Requests 

It would be better if you can also send you changes to the original repo also. So you need to use **Pull Request**.
The own will check your pull request to decide whether it is ok and maybe leave some comments.
If the pull request is approved, then your changes will be merged to the original master branch.

# Level 1 Section 4 Updating your Fork
