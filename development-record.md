# Github Pages開發紀錄
```
開發環境 vscode
Angular CLI: 15.1.6
Node: 16.15.0
Package Manager: npm 8.5.5
OS: win32 x64

Angular: 15.2.10

以下使用<repository name>的部分，皆使用Github上的repository name代入
```
## 建立專案

1.  使用vscode執行下列命令建立新angular專案，加入routing，設定style：
    ```
    ng new <repository name> --routing --style css
    ```

1.  在Github上建立同名repository並push此專案
    
## 發佈專案至Github Pages

1.  安裝angular-cli-ghpages
    ```
    npm i -g angular-cli-ghpages
    npm add angular-cli-ghpages
    ```

1.  Github Action workflow sample
    ```
    # Simple workflow for deploying static content to GitHub Pages
    name: Deploy static content to Pages

    on:
      # Runs on pushes targeting the default branch
      push:
        branches: ["master"]

      # Allows you to run this workflow manually from the Actions tab
      workflow_dispatch:

    # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
    permissions:
      contents: write
      pages: write
      id-token: write

    # Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
    # However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
    concurrency:
      group: "pages"
      cancel-in-progress: false

    jobs:
      # Single deploy job since we're just deploying
      deploy:
        environment:
          name: github-pages
          # url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Setup Pages
            uses: actions/configure-pages@v4
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              # Upload entire repository
              path: '.'

          - name: Install dependencies
            run: npm install

          - name: Build
            run: npm run build

          - name: Deploy
            if: success()
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: dist/<repository name>
              enable_jekyll: false

    ```

##  安裝 @angular/material
```
npm i @angular/material
ng add @angular/material

? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
? Set up global Angular Material typography styles? No   
? Include the Angular animations module? Include and enable animations
```

##  修改tsconfig.json
1.  設定可匯入package.json等json檔案資料至程式中
    加入以下設定
    ```
    "compilerOptions": {
      ...
      "resolveJsonModule": true,
      "allowSyntheticDefaultImports": true,
      ...
    }
    ```
