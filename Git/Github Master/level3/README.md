# Tag, Branchs and Releases

## Tag
### When to Use Tags

Tag every time you push to production. Unless every commit on master to production.
Tags are documentation. Use them to keep track of all production releases.

##The Three Different Types of Tags

1. **Lightweight** - just a tag, no message or tagger

	git tag

2. **Signed** - uses public key to prove identity of tagger

	git tag -s

3. **Annotated** - adds info on who tagged, when and why. [MOST of time, you will use this]

	git tag -a
	
Example:

	git tag -a v1.3.2 -m "Tag message"
	git push --tags
	
or

	git checkout ccbc2ec  // checkout a commit
	git tag -a v1.0.1  //If no -m, it will go to text editor to create a more comprehensive message
	<in text editor, add the tag message: v1.0.1 - New production>
	git push --tags
	
	
## Release Branches
Generally you only need tags for releases, but what if you need to make a change to a production release
without affecting master?

### Use Cases for Release Branches
There are three key reasons for creating release branches:

1. Manual QA

![](http://cs.uef.fi/paikka/zhentiw/images/git/branchs/1.png)

2. Long running releases

![](http://cs.uef.fi/paikka/zhentiw/images/git/branchs/2.png)

3. **On demand hot fixes**

![](http://cs.uef.fi/paikka/zhentiw/images/git/branchs/3.png)

	git checkout v1.1
	git checkout -b rb1.1  //create a release branch 1.1
	<hotfix>
	git commit -m "Hotfix"
	git tag v1.1.1 -m "Hotfix" //tag this branch as v1.1.1
	git checkout master
	git merge rb1.1 -m "Merged hotfix"
	git branch -d rb1.1  //delete branch
	
You cann create release branches on the fly from release tags - no need to create upfront

	
#In Execrise:

##Creating a Release Branch
If you look at your git repo, you’ll see there is a v1.0.0 tag for the kill_list merge commit. There’s a kill_list.md file with a list of assassins. Instead of going after dangerous assassins let's go after some bad coding practices. Since v1.0.0 is already in production, we should use a release branch to make these changes.

Checkout the v1.0.0 tag, use it to create release branch release_branch_1.0, and push to GitHub.

     git checkout tags/v1.0.0 -b release_branch_1.0
	 git push origin release_branch_1.0
	 
Now that you've created the release branch, replace the assassin names in kill_list.md with the following bad coding practices:

Unused code
Functions with side effects
Unformatted code
Repeated code blocks
Bad variable names

	  <do the hotfix>
	  git add --all
	  git commit -am "Do the hotfix"
	  git push origin release_branch_1.0
	  
Tag the fixed commit as v1.0.1, and push the tag up to GitHub.

	  git tag -a v1.0.1 -m "bad pratice for hotfix"
	  git push --tags
	  
Now that you've created the v1.0.1 tag, merge the release branch into master.

	  git checkout master
	  git merge release_branch_1.0 -m "Merged hotfix"
	  git push
	  
Now that you've merged release_branch_1.0 you can tidy up your repo by deleting the branch locally and pushing that change to GitHub.

	  git branch -d release_branch_1.0
	  git push origin :release_branch_1.0


# Release in Github

If you wnat ot share downloadable binaries plus additional notes with each of your tags, 
use the "release" feature in Github.

Benefits of releases:

* Host binary downloads without checking into Git
* Provide additional documentation / release notes

  