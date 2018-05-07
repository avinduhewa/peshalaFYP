# Instructions

 Run  " ```npm install``` " 
-
 Make sure serverless is installed
-
 If serverless profile is not set to ampifyn run below command
-
 ```serverless config credentials --key ACCESSKEY --secret SECRETKEY --provider aws --profile amplifyn ```
-

To run REST API Locally 
-
```serverless offline start```
-

To deploy to dev stage
-
```serverless deploy```
-

To deploy to prod stage
-
```serverless deploy -s prod```
-