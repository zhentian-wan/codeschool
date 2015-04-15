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


### Squash Commits
Sometime in last couple of commits can actually be one commit. So you may need to combine them.

For example:

	pick 44d59fa something for commits
	pick 7d2edad something for commits2
	pick 6e885d6 I am the previous commit
	squash 8e005f4 we want to squash this commit with previous commit
	
Squash merges a commit with the previous commit.
Save the exit, another editor will pop up, edit your message and save & exits again.



