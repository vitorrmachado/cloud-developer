export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "udagram-vitor-dev",
    "host": "udagram-vitor-dev.ctkcakescj5e.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-vitor-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret" : "hellowWorld"
  }
}
