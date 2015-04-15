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
