import React from 'react'
import { Header } from '../Screens/code/StyleItemsGridHome'
import Footer from '../Screens/home-sections/footer'
import { Paragraph, ParagraphHeading } from './TermsOfUseStyle'

export default function TermsOfUse() {
    return (
        <div>
            
            <Header/>

            <ParagraphHeading>
            Posting Content
            </ParagraphHeading>
            <Paragraph>
        which git If nothing is returned, or the command is not recognized, you may have to install Git on your system by downloading and running the installer. See the Git homepage for exceptionally clear and easy installation instructions.
        After installing Git, conﬁgure your username and email address. Do this before making a commit.
        Once Git is installed, navigate to the directory you want to place under version control and create an empty Git repository:
        git init
        This creates a hidden folder, .git, which contains the plumbing needed for Git to work.
        Next, check what ﬁles Git will add to your new repository; this step is worth special care:
        git status
        Review the resulting list of ﬁles; you can tell Git which of the ﬁles to place into version control (avoid adding ﬁles with conﬁdential information such as passwords, or ﬁles that just clutter the repo):
        git add file directory name #1 file/directory name #2 
        If all ﬁles in the list should be shared with everyone who has access to the repository, a single command will add everything in your current directory and its subdirectories:
        git add .

            </Paragraph>
            <ParagraphHeading>
            Posting Content
            </ParagraphHeading>
            <Paragraph>
        which git If nothing is returned, or the command is not recognized, you may have to install Git on your system by downloading and running the installer. See the Git homepage for exceptionally clear and easy installation instructions.
        After installing Git, conﬁgure your username and email address. Do this before making a commit.
        Once Git is installed, navigate to the directory you want to place under version control and create an empty Git repository:
        git init
        This creates a hidden folder, .git, which contains the plumbing needed for Git to work.
        Next, check what ﬁles Git will add to your new repository; this step is worth special care:
        git status
        Review the resulting list of ﬁles; you can tell Git which of the ﬁles to place into version control (avoid adding ﬁles with conﬁdential information such as passwords, or ﬁles that just clutter the repo):
        git add file directory name #1 file/directory name #2 
        If all ﬁles in the list should be shared with everyone who has access to the repository, a single command will add everything in your current directory and its subdirectories:
        git add .
        This will "stage" all ﬁles to be added to version control, preparing them to be committed in your ﬁrst commit.
        For ﬁles that you want never under version control, create and populate a ﬁle named .gitignore before running the add command.
        Commit all the ﬁles that have been added, along with a commit message:
        git commit -m "Initial commit"
        This creates a new commit with the given message. A commit is like a save or snapshot of your entire project. You can now push, or upload, it to a remote repository, and later you can jump back to it if necessary. If you omit the -m parameter, your default editor will open and you can edit and save the commit message there.
        Adding a remote
        To add a new remote, use the git remote add command on the terminal, in the directory your repository is stored at.
        The git remote add command takes two arguments:
        A remote name, for example, origin1. A remote URL, for example, 
            </Paragraph>
            <Footer/>
        </div>
    )
}
