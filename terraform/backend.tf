
provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = "us-east-2"
}

variable "aws_access_key" {
  description = "AWS Personal Access Key"
  sensitive   = true
}

variable "aws_secret_key" {
  description = "AWS Personal Secret Key"
  sensitive   = true
}

variable "github_access_token" {
  description = "GitHub Access Token"
  sensitive   = true
}
