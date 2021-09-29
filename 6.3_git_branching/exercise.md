## Branching Exercise 

## Part I 

1. What git command creates a branch?

The command `git checkout -b <branch-name>` creates a new branch 

2. What is the difference between a fast-forward and recursive merge?

A recursive merge is the default form of merge that git uses. In a fast-forward merge, there's only one line of history. When you merge a new branch, the main branch just points directly to the newly created branch. In a recursive merge, git creates a new commit on the main branch that reflects the changes made in the new branch. This means that the newly merged changes will have two parents (the main branch and the new branch), unlike a fast-forward merge, where there is only one parent. 

3. What git command changes to another branch?

`git checkout <branch-name>`

4. What git command deletes a branch?

`git branch -d <branch-name>`

5. How do merge conflicts happen?

Merge conflicts happen when two team members attempt to change the same file at the same time. 

