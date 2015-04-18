# Issues

## Issues can ba used for:

* Tracking bugs
* Managing features

### Enabling issues for a project
![](http://cs.uef.fi/paikka/zhentiw/images/git/issues/1.png)

### Adding commits to Issues

	git commit -m "Should help with issue #1"
	
Mention an issue in a commit and it will show up in the issue

### Referencing Issuses in Commits

	git commit -m "Fixes #1"
	
Includes **"fixes"**, **"closes"** or **"resolves"** and it'll close the issue.

# Wiki

If you don't want everyone can edit your wiki page, check the second box:

![](http://cs.uef.fi/paikka/zhentiw/images/git/issues/2.png)

* [Markdown](https://help.github.com/articles/github-flavored-markdown)
* [Badges](https://github.com/rails/arel/)


# GitHub Pages

GitHub Pages can be used for:

* Adding documentation to a project
* Hosting a site for a user or organization

## Creating Your User Page

* Create a repo called:
    
 	username.github.io

* Use the auto page generator
* Write content
* Pcik theme
* Publish

## Creating a Project Page

* Select in settings
* Write content
* Select a layout
* Publish
* Content is in gh-pages branch

## Configuring a Custom Domain

* Create "CNAME" file in root of repo
* Should be on same branch as pages content	
* Configure CNAME with DNS host


