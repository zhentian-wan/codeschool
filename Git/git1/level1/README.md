# Level One
	
In this level, you will learn follow things:
1. How to point which project folder you want GIT to work on! -- git init
2. How to check what change has been made since last commint  -- git status
3. How to add files to stage                                  -- git add <filename>
4. Different ways to add files
5. How to commit files                                        -- git commit -m "What change you have made"
6. How to check history									      -- git log

##Setting up GIT

	git config --global user.name "Zhentian Wan"
	git config --global user.email answer881215@gmail.com
	git config --global color.ui true                                


##Starting a REPO

	mkdir store
	cd store
	git init        

##Git work flow
1. Jane creates README.txt file
2. Add file to staging area, getting ready to take a picture
3. Commit changes, A snapshot of those on the stage
4. Jane modifies README.txt file & adds LICENSE
5. ADD both files to staging area
6. Commit changes

	$ git status                                                      // check what's changed since last commit
	$ git add README.txt                                              // add file to staging area, the file should be tracked
	$ git commit -m "Create a README."                                // Commit message what work was done? This file will be added to the timeline(MASTER)
	$ git status                                                      // After commit, check status, you will find no new or modified files since last coomit

###If you wants to add more files using:

	$ git add --all
	$ git add *.txt                                                   // add all txt files in current directory
	$ git add docs/*.txt                                              // add all txt files in docs directory
	$ git add docs/                                                   // add all files in docs directory
	$ git add "*.txt"												  // add entire .txt files in the all project


##Check history

	$ git log