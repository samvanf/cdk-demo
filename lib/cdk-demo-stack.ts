import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creating a new VPC with a public subnet in 2 availability zones.

    const vpc = new ec2.Vpc(this, "mainVPC", {
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: "public-subnet",
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    // Create an ECS cluster
    const cluster = new ecs.Cluster(this, "Cluster", { vpc });

    // Add capacity to it
    cluster.addCapacity("DefaultAutoScalingGroupCapacity", {
      instanceType: new ec2.InstanceType("t2.micro"),
      desiredCapacity: 3,
    });

    const taskDefinition = new ecs.Ec2TaskDefinition(this, "TaskDef");

    taskDefinition.addContainer("DefaultContainer", {
      image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      memoryLimitMiB: 512,
    });

    // Instantiate an Amazon ECS Service
    const ecsService = new ecs.Ec2Service(this, "Service", {
      cluster,
      taskDefinition,
    });
  }
}
