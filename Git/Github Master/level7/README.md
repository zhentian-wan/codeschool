#Hub

Hub is a command line tool for Github.

##Installing Hub

* MAC

	brew updatae
	brew install hub
	
* Linux/Windows

	git clone https://github.com/github/hub.git
	cd hub
	rake install prefix=/usr/local
	
## Using Hub

Use Hub commands:

	1. hub clone
	2. hub fork
	3. etc

Notes:

* Don't alias in msysGit
* Tab completion:
	http://go.codeschool.com/bash_completion
	http://go.codeschool.com/zsh_completion
	
### Creating a Repo Using Hub

	git init new_repo
	cd new_repo
	vi README.md
	git add .
	git commit 
	git create // You don't need to go browser to get repo anymore
	git push -u origin master
	git browse
	
### Creating a pull request using hub

	git checkout -b new_branch
	vi new_code.rb
	git add .
	git commit
	git push -u origin new_branch
	git pull-request
	
### Cloning a repo using hub

Clone one of your repos
		
	git clone repo_name
	
Clone someone else

	git clone username/repo_name
	
### Forking a Repo Using Hub

Forking a repo:

	git clone deadlyvipers/dojo_rules
	cd dojo_rules
	git fork
	
the problem for this is when you create a pull request, it still goes to deadlyvipers.
For fixing this, just need to speccify repos/branches to use pull-request:

	git checkout -b new_branch
	vi new-code.rb
	git add .
	git commit 
	git pull-request -b peterbell:master -h peterbell:new_branch //specifiying PR base (-b) and head (-h)
	git browse dojo_rules
	

## Collaborating with Hub

### Pulling from Forks Using Hub

	git remote add username

or 

	git fetch username
	
then you can see what the user changes and what he is working on.

### Cherry-picking from Forks using Hub

	git cherry-pick username@SHA
	
###Checking out a Pull Request form a fork

	git checkout https://github.com/username/repo/pull/1 custom-branch-name

### Merge a Pull Request from a Fork

	git merge https://github.com/username/repo/pull/1
	
If it is good, then push the merge:

	git push
	
Otherwise you can blow away the merge commit:

	git reset --hard HEAD~1
	
# In Execrise:

###Hub or Git?

If we didn't have the hub command installed and aliased as git, which of the following would not work?

* git clone
* **git fork**
* git pull
* git push

###Hub Clone
Ready to give hub a shot? We've aliased it to git, so we'll be able to use whichever one we prefer. For starters, clone down the deadlyvipers/dojo_rules repository without using a protocol (like http or ssh).

	git clone deadlyvipers/dojo_rules
	
###Hub Fork
Now that we have the repo cloned, go ahead and fork it using hub (or git).

	git fork