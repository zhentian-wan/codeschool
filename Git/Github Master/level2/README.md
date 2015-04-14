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


