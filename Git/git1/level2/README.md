#Staging and Branche

## GIT DIFF && GIT DIFF --staged
Show unstaged difference.

	  git diff
	  
Once the files are added to the stag. We can not see the unstaged message. But you do can get the 
stagged message by using:

     git diff --staged
	 

## UNSTAGING FILES
For example you have one file called 'LICENSE'
	
	git status
	
You stage this LICENSE file. If you want to unstaging it:

	git reset HEAD LICENSE
	
## DISCARD CHANGES
What if you also do not want the content you have changed?

	  git checkout -- <file_name>
	
This will help to reset the content.

## UNDOING A COMMIT
Sometime you may made a commit, but next second you regret. Maybe cause you forget add some files.
So this is the way to undoing a commit:

	  git rest --soft HEAD^  // --soft: reset into staging
	  git rest --hard HEAD^  // --hard: remove changes you made.
	  
	  
## ADDING TO A COMMIT
Another way instead of undoing a commit, we can add the file and commit it with new commit message:

	  git add todo.txt
	  git commit --amend -m "Modify readme & add todo.txt"  //--amend: add to the last commit, with new commit message
	  
##USEFUL COMMANDS
DONT do it after push!
		
		git reset --soft HEAD^  // Undo last commit, put changes to staging
		git commit --amend -m "New message"  // change last commit with new message
		git reset --hard HEAD^  //Undo last commit and all changes
		git reset --hard HEAD^^  //Undo last 2 commits and all changes
		
# HOW TO SHARE?
Github , BB

## ADDING A REMOTE

	  git remote add origin <repoa url>
	  
Show remote:

	  git remote -v

## PUSHING TO REMOTE

	git push -u origin master  // Git will ask the user name and password, if you dont want everytime it ask you: https://help.github.com/articles/set-up-git
	
## PULLING FORM REMOTE

	  git pull
	  
## HAVING MULTIPLE REMOTES
Uusually we may have more than one remote, currently, we might name remote as 'origin'. We may also want a 
'test' remote and a 'production' remote.

### WORKING WITH REMOTES
Too add new remotes:

	  git remote add <name> <address>
	  
To remove remotes:

	  git remote rm <name>
	  
To push to remotes:
	
	  git push -u <name> <branch>  // -u: next time you push again, you don't need to specify the name again. you just need 'git push'
	  

# HEROKU REMOTE

	  heroku create
	 
After create a heroku, you can use:

	  git remote -v
	
to see, and you can see that heroku rmoete are already added into our remote.

## TO PUSH TO HEROKU

	  git push heroku master


#Exercise:

##UNSTAGED DIFFERENCES
A new file has been added to the site. Run the command to see what all has changed since your last commit.

		git diff

##STAGE NEW FILE
There it is: ostrich.html. Stage it to be committed.

	   git add ostrich.html
	   
##STAGED DIFFERENCES
We've added ostrich.html to the staging area, but your co-worker has stopped by and asked to see the new page first. Run a diff on the staged changes.

		git diff --staged

##UNSTAGE FILES
"Wait," says the co-worker. "They didn't tell you? The client "wants the ostrich section pulled - they couldn't get a license to "sell them." Better unstage ostrich.html.

	  git reset --soft ostrich.html
	  
##SKIP STAGING
We've modified the index.html file, adding a link to the cats section. Since that file is already tracked, you can just skip staging and commit it with one command.

		git commit -am "Add index.html file"
		
##ADD TO COMMIT
Whoops! We forgot to add the cats.html page that index.html links to, and it should really be amended on the same commit. To do this, let's first stage cats.html.

	  git add cats.html
	  

Second, let's add cats.html to the prior commit and change the commit message in one step.

     git commit --amend -m "Add cats.html"
	 
##ROLL BACK COMMIT
Wait, you're getting word that the cats section might be cancelled. Undo the commit, and put the files back in staging.

	  git reset --soft HEAD^
	  
##DISCARD CHANGES
Forget the whole thing - the client's license to sell cats is suspended during some kind of "investigation". Discard your changes to cats.html and index.html.

	  git checout -- index.html cats.html
	  
##REMOVE COMMIT 
The next feature is a banner on the main page, saying the pet shop will soon be offering badgers. Add and commit index.html in one step, skipping the staging area.
	  
	  git commit -am "Add index.html"
	  
Your co-worker is back, looking sheepish. "Never mind the badgers ad. The client's legal department said that was a liability risk." You'll need to remove the most recent commit, and all its changes.

	  git reset --hard HEAD^
	  
##NEW REMOTE REPOS
Oh well, at least you have the site started. Your Example Labs co-worker got you the remote address for the shared repo: git@example.com:example/petshop.git. Add that address as the origin repo.

	  git remote add origin git@example.com:example/petshop.git
	 
##Done for the day! Send your committed work to "origin". Make sure you use the -u option so origin will be the default destination in the future.

     git push -u origin master
