# Develop notes
1.  Create Project  
    run the following command
    ```
    ng new larrylai-pages.github.io --routing --style css
    ```
    Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?N 

### TortoiseGit issue
1.  Could not get HEAD hash. libgit2 returned:repository path "xx" is not owned by current user  
    run the following command
    ```
    git config --global --add safe.directory "*"
    ```
1.  TortoiseSVN icon overlays don't show up  
    delete other overlay icons from the registry

### Github Action
1.  Create TOKEN  
    Click Github user icon  
    Settings
    Developer Settings  
    Personal access tokens->Tokens (classic)
    Generate new tokens (classic)  
    Note=**GH_TOKEN**  
    check all item and Generate tokens

2.  Create WorkFlow  
    in Github Repo Page  
    Settings->Source=Github Actions  
    Static Html->Press Configure Button  
    Replace the file content with the following text
    ```
    name: Angular Build and Deploy

    on:
      push:
        branches:
          - master

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Set up Node.js
            uses: actions/setup-node@v3
            with:
              node-version: 20

          - name: Build Angular app to prod
            working-directory: .
            run: npm install && npm run build:prod

          - name: Deploy to GitHub Pages
            uses: JamesIves/github-pages-deploy-action@v4
            with:
              folder: dist/larrylai-pages.github.io/browser
              branch: gh-pages
              token: ${{ secrets.GH_TOKEN }}
    ```
    Commit changes

1.  install angular-cli-ghpages
    ```
    npm i -g angular-cli-ghpages
    npm add angular-cli-ghpages
    ```

2.  Github setting  
    create new branch "gh-pages"  
    on repo page->setting->pages  
        Source="Deploy from branch"  
        Branch="gh-pages"