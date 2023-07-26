# Portfolio

This Terraform/Hugo stack creates an AWS Amplify app for a portfolio website, with a main branch and a webhook.

## Resources Created

- An AWS Amplify app connected to a GitHub repository.
- A main branch for the Amplify app.
- A webhook that triggers a new build whenever changes are pushed to the main branch.

## Prerequisites

- AWS account with necessary permissions to manage Amplify apps, S3 buckets, and Route53 (if using a custom domain).
- GitHub repository for your portfolio website.
- AWS access key and secret key for your AWS account.
- GitHub access token.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the directory containing the Terraform configuration files.
3. Run `terraform init` to initialize your Terraform workspace.
4. Run `terraform apply` to create the resources.

## Continuous Deployment

The Amplify app is set up for continuous deployment. This means that any commit pushed to the main branch of the connected GitHub repository will automatically trigger a new build and deployment of the Hugo app. You can monitor the status of these builds in the AWS Amplify console.

## Post-Deployment Steps

After running `terraform apply`, you need to manually add your custom domain to the Amplify app:

1. Navigate to the AWS Amplify console.
2. Click on the "portfolio" app.
3. Click on "Domain management" in the left sidebar.
4. Click on "Add domain".
5. Enter your custom domain (e.g., "calebolson.space") and follow the prompts to add the domain.

After adding the domain, AWS Amplify will automatically configure the necessary DNS records in your Route53 zone (if the domain is managed by Route53). You should be able to access your Amplify app at your custom domain after the DNS records propagate, which may take up to 48 hours.
