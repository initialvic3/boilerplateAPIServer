# Untitled

**Deploying NodeJS Typescript Server to ElasticBeanstalk**

1.Create your AWS and IAM account if you havent already

2.Install EB CLI (Using homebrew)

Make sure you enter your AWS Access Key and Secret for setup

    $ brew update
    $ brew install awsebcli
    //Verify
    $ eb --version

Use these commands to create/deploy/delete Server

    //Create repository
    $ eb init --platform node.js --region ap-southeast-2
    //Create a sample server
    $ eb create --sample node-express-env
    //Verify it worked
    $ eb open

    //Update the application like this:
    $ git add .
    $ git commit -m "{MESSAGE_HERE}"
    $ eb deploy

    //Delete repository like this:
    $ eb terminate
