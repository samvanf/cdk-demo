# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
* `cdk destroy`     destroys the deployed infrastructure

## TODO:

* Figure out how to make an image that automatically spins up this Nestjs app: https://github.com/samvanf/docker-full-stack-app/tree/master/packages/nestjs

According to [this Github issue](https://github.com/aws/aws-cdk/issues/12597), the only way to deploy a custom Docker image to our ECR repo is to use this package:

https://github.com/cdklabs/cdk-ecr-deployment

