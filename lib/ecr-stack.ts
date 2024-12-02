import * as cdk from "aws-cdk-lib";
import * as ecr from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";

export class EcrStack extends cdk.Stack {
  readonly productsServiceReposiory: ecr.IRepository;

  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    this.productsServiceReposiory = new ecr.Repository(
      this,
      "ProductsServiceRepository"
    );
  }
}
