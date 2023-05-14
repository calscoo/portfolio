
resource "aws_amplify_app" "portfolio" {
  name       = "portfolio"
  repository = "https://github.com/calscoo/portfolio"
  access_token = var.github_access_token

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
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  environment_variables = {
    AMPLIFY_DIFF_DEPLOY = "false"
    AMPLIFY_MONOREPO_APP_ROOT = "hugo"
    _LIVE_UPDATES = "[{\"name\":\"Hugo\",\"pkg\":\"hugo\",\"type\":\"hugo\",\"version\":\"latest\"}]"
  }
}

resource "aws_amplify_branch" "main_branch" {
  app_id      = aws_amplify_app.portfolio.id
  branch_name = "main"
}

resource "aws_amplify_webhook" "main_webhook" {
  app_id      = aws_amplify_app.portfolio.id
  branch_name = aws_amplify_branch.main_branch.branch_name
  description = "triggermain"
}
