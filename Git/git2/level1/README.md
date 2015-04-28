# Rebase Recap

First see, what actually rebase does for us:
For example we have one master branch and a unicorns branch.
Basically we want unicorns branch up to date, we want to replay the commits from master branch to unicorns branch.
They have one common commit and two differences.
![](http://cs.uef.fi/paikka/zhentiw/images/git/rebase/1.png)

We use:

     git checkout unicorns
     git rebase master
  
What those command lines do is first switch to branch 'unicorns'.
System will create a **temp** area:

![](http://cs.uef.fi/paikka/zhentiw/images/git/rebase/2.png)

and move top two commits from unicorns branch to temp area.

Now we add top two commits from master to unicorn branch:

![](http://cs.uef.fi/paikka/zhentiw/images/git/rebase/3.png)

Last, move the commits in temp area to the top of unicorns branch:

![](http://cs.uef.fi/paikka/zhentiw/images/git/rebase/4.png)

So now this is what tow status difference:

![](http://cs.uef.fi/paikka/zhentiw/images/git/rebase/5.png)

Looks like we **move the last tow commits from master to unicorns branch**, actually it is more than that, it also **change the unicorns branch to point to the last commit on master**.


## Iteractive Rebase

Sometime if we want to alert commit in the same branch, what can we do that?

     git rebase -i HEAD~3
	 
**-i: ** iteractive mode
**HEAD~3: ** last three commits

**Note:**
     By using:
	    $ git log --oneline  //the order to commit is from newest to oldest
	 but
        $ git rebase HEAD~3  //the order is from oldest to newest		

### Switch commits order		
It will pop up a text editor, for example, now we want to re-order the last three commits.
	
	git rebase HEAD~3
	
In pop up text editor, reorder last two commit and save it:

	:wq
	
###Change Message (keyword: **reword**)

If we want to change the commit message's content, we just need to change 'pick' keyword to 'reword' keyword.
For example:
	
	pick 7ee9572 Add new page
	
to:

	reword 7ee9572 Add new page
	
It will also pop up a text editor, in the editor, you can type the message you want:

	Add capybaras page.
	
save and exit.

When you use 'git log --oneline' log out those message again, you will see the message has been changed.

### Split commits (Keyword: **edit**)
Sometime you may want to split one single commit into 2 or even 3 commits.
After change the keyword from 'pick' to 'edit', save it. First thing to do is reset the head:

	git reset HEAD^
	
After that add file and commit.


### Squash Commits
Sometime in last couple of commits can actually be one commit. So you may need to combine them.

For example:

	pick 44d59fa something for commits
	pick 7d2edad something for commits2
	pick 6e885d6 I am the previous commit
	squash 8e005f4 we want to squash this commit with previous commit
	
Squash merges a commit with the previous commit.
Save the exit, another editor will pop up, edit your message and save & exits again.

After that force to push to the master:

	git push -f

----------------------------------

# Exercise

##REBASE RECAP

So you've been working on your feature branch for a couple days and you realize you need to bring commits back in from master. Now you could just merge in the branch but that would create an ugly merge commit. Use rebase to bring those changes into your branch without the merge commit.

     git rebase master
	 
##INTERACTIVE REBASE

You're getting ready to merge in your feature branch, but first you want to clean up your commits a bit. Go ahead and use interactive rebase to edit your last 4 commits.

##COMMIT ORDERING
You notice a critical error on your part. The commit where you wrote tests comes after the commit where you made the actual changes. Let's swap these 2 commits so that it looks like you wrote the tests first. Swap the 'Add tests' commit so that it comes before the 'Implement poodles' commit.

	pick b3f1649 Add unicorn
	pick f239187 Implement poodles
	pick 4b65a5a Add tests
	pick c3f863f Added a title to the homepage

to:

 	pick b3f1649 Add unicorn
	pick 4b65a5a Add tests
	pick f239187 Implement poodles
	pick c3f863f Added a title to the homepage
	
##REWORDING A COMMIT I
As you're editing your commits, you notice that the commit that says 'Add tests' is a little vague, maybe you should change it to something more specific. Use the reword command to change the message of this commit.

	pick b3f1649 Add unicorn
	pick 4b65a5a Add tests
	pick f239187 Implement poodles
	pick c3f863f Added a title to the homepage
	
to:

	pick b3f1649 Add unicorn
	reword 4b65a5a Add tests
	pick f239187 Implement poodles
	pick c3f863f Added a title to the homepage	

##REWORDING A COMMIT II
After setting the 'reword' command in the interactive rebase editor another editor window has opened up. This is where you actually change the commit message. Go ahead and change the commit message to: Add tests for poodles to be more descriptive.

	Add tests
	
to:

	Add tests for poodles
	
##SPLIT COMMITS I
You remember that the 'Add unicorn' commit also contains the testing changes. Since we have separate commits for adding tests for poodles it makes sense to split out the test changes into a separate commit. Tell git to stop at this commit so we can reorganize it a bit.

	pick b3f1649 Add unicorn
	pick 4b65a5a Added tests for poodles
	pick f239187 Implement poodles
	pick c3f863f Added a title to the homepage

to:

	edit b3f1649 Add unicorn
	pick 4b65a5a Added tests for poodles
	pick f239187 Implement poodles
	pick c3f863f Added a title to the homepage
	
##SPLIT COMMITS II 
After saving the interactive rebase text file, git has stopped at the 'Add unicorn' commit. The first thing we need to do is to reset back to the previous commit, so the changes in the most recent commit are back in the file and unstaged.

     git reset HEAD^
	 
##SPLIT COMMITS III
Great! You've already re-committed the changes needed in 2 different commits. All that's left to do is to resume the rebase with the continue option.

	  git rebase --continue
	  
##SQUASHING COMMITS I
You noticed another bug with those pesky poodles, so you've gone ahead and fixed it, making another commit in the process. Now you have 2 commits that both affect the poodles page. You should squash them into one commit to simplify your git logs.

	pick b3f1649 Add unicorn
	pick 4b65a5a Add tests
	pick f239187 Implement poodles
	pick c3f863f Add title to poodle page
	
to:

	pick b3f1649 Add unicorn
	pick 4b65a5a Add tests
	pick f239187 Implement poodles
	squash c3f863f Add title to poodle page
	
##SQUASHING COMMITS II
After designating a commit to be squashed, another editor pops up enabling you to set a commit message for the resulting commit. Go ahead and set to: squashed some poodles.

[Note]**You should delete the old commit message**

	squashed some poodles

After save, force to push to master

	git push -f