## Angular Development Environment Setup
1. install Node.js v20.12.2(LTS)  
https://nodejs.org/
1. install Visual Studio Code v1.88.1  
https://code.visualstudio.com/download
1. install Angular v17.3.4  
   open a command prompt window and run the following command  
   ```
   npm install -g @angular/cli
   ```
### Angular issue
1. run "ng" command get error message-"因為這個系統上已停用指令碼執行"  
   open PowerShell ISE and run the following command
   ```
   set-executionpolicy remotesigned
   ```