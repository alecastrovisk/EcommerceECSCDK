import * as cdk from "aws-cdk-lib";
import { EcrStack } from "../lib/ecr-stack";

const app = new cdk.App();

const ecrStack = new EcrStack(app, "EcrStack", {});
