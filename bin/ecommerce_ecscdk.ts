import * as cdk from "aws-cdk-lib";
import { EcrStack } from "../lib/ecr-stack";

const app = new cdk.App();

const tagsInfra = {
  cost: "ECommerceInfra",
};

const env: cdk.Environment = {
  account: "891377140806",
  region: "us-east-1",
};

const ecrStack = new EcrStack(app, "EcrStack", { env, tags: tagsInfra });
