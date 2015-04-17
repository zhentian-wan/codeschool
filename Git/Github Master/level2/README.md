#Single Repository Workflows
## Fork Based Workflow

Every collaborator has their own fork and you also have your own fork. When other
make a pull request, you need to update in your laptop clone, it is hard to keep update.

### Single Repository Workflow

Everyone collaborate has his own clone. So they can pull/push from their clone to Github.
It is easy to keep update.

### Conflicts if everyone commits directly to master
If everyone is pushing to the master branch, you'll end up stepping on each other.
This is not good.

### Feature branches for independent development
Use feature branches to keep features separate. Everyone should work independently on
their own branch.
Multiple developers can collaborate on each feature branch. For example:

	git fetch
	
	git branch -a
	
	git checkout f2
	
When job is done, then can merge to master.

### Pull requests for Reviewing Work

	git checkout -b kill_list // create a kill_list branch and switch to the branch
	
	git push origin kill_list // push kill_list branch to the Github
	
When push to the branch:

		git push -u origin kill_list
		
Which push the changes to the new branch and with the same name, but also use the same upstream.
After that, go the Github to send a **pull request** on the Github from the branch for the co-works to review the changes.

In Ex:

Create a pull request from your branch to your master. When you create a pull request by default it'll go from your master branch back to "deadlyvipers/dojo_rules". In this case though, we want the pull request to go from "dojo_rules/deadly_skills" to "dojo_rules/master" – both in your repository.
To do this, create a pull request on GitHub. Make sure the base is your master and the "compare" is your "deadly_skills" branch. This should show all of the changes you made on your branch.	
Navigate over to the "Pull Requests" page on your fork of the repo. Create a pull request that will go from your **branch of dojo_rules** to **your master**.

To do that: 

1. Go the the Github, switch to the branch.
2. Create a pull request.
3. Compare your own repo: base --> master, head --> <branch_name>


## Collaborating on Pull Requests

When you working on a feature branch, and you did one commit, then you can make a pull request to other team member,
to check your code and give you some comments. When you fix the comments and you **commit** it and **push** to the github.

![](http://cs.uef.fi/paikka/zhentiw/images/git/pullrequest/1.png)

### Reviewing a pull request

1. Download all branches from GitHub

     git fetch
     
2. View all of the branches

      git branch -a  //-a includesx remote branch
	 
3. Checkout a local copy of a remote branch

      git checkout <branch_name>
	 
4. Test code, make any changes and then commit and push changes

	  <make edits>
	  git commit
	  git push
	  
In Ex:

	  git checkout -b deadly_skills
	  git push origin deadly_skills
	  <make_changes>
	  git commit -am "Added deadly skills"
	  git push origin deadly_skills	  
	  
Create a pull request from your "deadly_skills" branch back to your "master" branch, head to your repo and click on "Pull Requests". Then click "New Pull Request" at the top right. On the left side you'll see a "base fork". Change this so that it says "base: master".

Now the pull request should be comparing "master" and "master". However, we want to change this a little more. The right select box should say "compare: master". Click on this, then select your branch – "deadly_skills". You should see a diff with your new deadly skills added.

With this all setup, click "Create pull request", give it any description you would like, then click "Create pull request". After that, you should be abler to click "Submit Answer" and move on! Whew!

Go to your fork of "dojo_rules" and click "Settings" on the right. Click "Collaborators", which will likely prompt you to verify your GitHub password. After entering it, enter "codeschool-kiddo" into the form and select "codeschool-kiddo" from the autocomplete list then click "Add Collaborator".

After these steps are setup, you should be in a good position to complete the tasks from this challenge. If you are running into trouble, consider deleting your "dojo_rules" repository on GitHub (and locally) and re-forking it then completing the above steps.


###Merge pull request
When other creaet a new branch 'new_rules'. They did some changes and push to the master. 
Now what you need to do is:

1. Switch to the master:

     git checkout master
	  
2. Get all the lastest updates:

     git pull
	  
3. Check the branchs available (optional):

     git branch -a
	  
4. Find the branch you need to work on, in this case, 'new_rules' branch:

     git checkout new_rules
	  
5. You can find the file which you want to modify, after done, commit it and push it.

	  <make changes>
	  git commit -am "make new changes"
	  git push
	  
6. Go to Github, you will see you commit are in the pull request, if it is ok, then click 'merge pull request' to the master.


##Fast Forward or Recursive Merge
###Fast Forward merge

	  git checkout master
	  git merge feature_branch
	  
**Benefits:**
Get less commit. Because you don't get merge commits.

**Download side:**
No idea what commits were made from which feature branch.

###Recursive Merge
This is recommended. 

**Benefints:**

* Clear what was done on a branch
* Single commit to revert

	  git checkout master 
	  git merge --no-ff feature_branch
	  

### Considerations when Merging Pull Requests

There are three key considerations - should you:

* Interactively rebase to simplify history?
Yes, but shouldn't be clear enough for co-workers knowing what you have done and the process.

* Rebase to create a linear history?
Yes, looks like you are only building one feature at a time

* Fast forward or recursive merges?
Recursive merges.

###Final thing to do:

	  git checkout master
	  git merge --no-ff feature_branch
	  git push
	  
##In Ex:

Pull all the changes down from GitHub. Look at your git log and you’ll see the "new_rules" branch has been merged into master. After pulling it down, your "master" branch should be at the same state as the "master" branch on GitHub.
Merge the "deadly_skills" branch into master and push the changes to GitHub. You'll need to be on the "master" branch when you run the merge command.
After you push the "master" branch, you'll see that the pull request on the branch was closed.

		dojo_rules (deadly_skills)$ git checkout master
		dojo_rules (master)$ git pull
		
Next, merge in the using the no-ff option.

	   dojo_rules (master)$ git merge --no-ff deadly_skills -m "Merging in deadly_skills"		

Force push it to GitHub:

	  dojo_rules (deadly_skills)$ git push
