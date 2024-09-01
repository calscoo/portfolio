
resource "aws_amplify_app" "portfolio" {
  name       = "portfolio"
  repository = "https://github.com/calscoo/portfolio"
  # access_token = var.github_access_token

  # The default build_spec added by the Amplify Console for React.
  build_spec = <<-EOT
version: 1
applications:
  - frontend:
      phases:
        build:
          commands:
            - hugo
      artifacts:
        baseDirectory: public
        files:
          - '**/*'
      cache:
        paths: []
    appRoot: hugo
  EOT

  custom_rule {
    source = "https://calebolson.space"
    status = "302"
    target = "https://www.calebolson.space"
  }

  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  environment_variables = {
    AMPLIFY_DIFF_DEPLOY       = "false"
    AMPLIFY_MONOREPO_APP_ROOT = "hugo"
    _LIVE_UPDATES             = "[{\"name\":\"Hugo\",\"pkg\":\"hugo\",\"type\":\"hugo\",\"version\":\"latest\"}]"
  }
}

resource "aws_amplify_branch" "main_branch" {
  framework   = "Web"
  stage       = "PRODUCTION"
  app_id      = aws_amplify_app.portfolio.id
  branch_name = "main"
}

resource "aws_amplify_webhook" "main_webhook" {
  app_id      = aws_amplify_app.portfolio.id
  branch_name = aws_amplify_branch.main_branch.branch_name
  description = "triggermain"
}

resource "aws_amplify_domain_association" "domain" {
  app_id                = aws_amplify_app.portfolio.id
  wait_for_verification = true
  domain_name           = "calebolson.space"
  certificate_settings {
    type = "AMPLIFY_MANAGED"
  }

  sub_domain {
    branch_name = aws_amplify_branch.main_branch.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main_branch.branch_name
    prefix      = "www"
  }
}
