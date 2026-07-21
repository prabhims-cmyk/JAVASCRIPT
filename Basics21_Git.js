/*1. Check Git Version
        git --version
    Example:git version 2.49.0

2. Configure Git
    Set your username:
        git config --global user.name "John"
    Set your email:
        git config --global user.email "john@gmail.com"
    View configuration:
        git config --list

3. Initialize a Repository
    Create a Git repository:
        git init
    Output:
    Initialized empty Git repository

4. Check Status
        git status
    Shows:
    Modified files
    New files
    Staged files
    Untracked files

5. Add Files
    Add one file
        git add app.js
    Add multiple files
        git add file1.js file2.js
    Add everything
        git add .

6. Commit Changes
        git commit -m "Added login page"

7. Clone a Repository
    git clone https://github.com/user/project.git
    Downloads the project to your computer.

8. Connect Local Repository to Remote
    git remote add origin https://github.com/user/project.git
    Check remote:
    git remote -v

9. Push Code
    First push:
    git push -u origin main
    Next pushes:
    git push
    Uploads commits to GitHub.

10. Pull Latest Changes
    git pull
    Downloads and merges changes from the remote repository.

11. Fetch Changes
    git fetch
    Downloads changes but does not merge them.
    
Difference:
git fetch → Download only
git pull → Download + Merge

*/







