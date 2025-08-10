import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
}

interface SkillSection {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillSections: SkillSection[] = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'Primary language for automation, API testing, and data validations.'
        },
        {
          name: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          description: 'Used for building robust automation frameworks and backend tests.'
        },
        {
          name: 'C#',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
          description: 'Developed test utilities and services in .NET ecosystems.'
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          description: 'Leveraged for modern web automation and tooling.'
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          description: 'Created frontend tests and custom tooling for web apps.'
        },
        {
          name: 'SQL',
          logo: 'https://cdn.simpleicons.org/mysql/4479A1',
          description: 'Crafted complex queries for data setup and validation.'
        }
      ]
    },
    {
      title: 'Automation Frameworks',
      skills: [
        {
          name: 'Selenium',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
          description: 'Built reusable page object models and regression suites.'
        },
        {
          name: 'Playwright',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
          description: 'Automated cross-browser E2E tests with reliable parallel execution.'
        },
        {
          name: 'Cypress',
          logo: 'https://cdn.simpleicons.org/cypress/17202C',
          description: 'Fast and consistent UI and API automation for modern web apps.'
        },
        {
          name: 'Pytest',
          logo: 'https://cdn.simpleicons.org/pytest/0A9EDC',
          description: 'Python-based automation for services and backend validations.'
        },
        {
          name: 'JUnit',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg',
          description: 'Practiced TDD and BDD for maintainable Java test suites.'
        },
        {
          name: 'NUnit',
          logo: 'https://cdn.simpleicons.org/nunit/512BD4',
          description: 'Implemented unit and integration tests in .NET projects.'
        },
        {
          name: 'TestNG',
          logo: 'data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2764%27 height=%2764%27 viewBox=%270 0 64 64%27><rect width=%2764%27 height=%2764%27 rx=%2712%27 fill=%27%23FF6C37%27/><text x=%2750%25%27 y=%2752%25%27 text-anchor=%27middle%27 font-family=%27Arial, Helvetica, sans-serif%27 font-weight=%27700%27 font-size=%2718%27 fill=%27%23fff%27>TestNG</text></svg>',
          description: 'Created data-driven frameworks and parallel test execution.'
        },
        {
          name: 'Tosca',
          logo: 'https://cdn.simpleicons.org/tricentis/0078D7',
          description: 'Maintained enterprise test suites for UI and API validation.'
        },
        {
          name: 'REST Assured',
          logo: 'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
          description: 'Validated RESTful services and microservice interactions.'
        },
        {
          name: 'Cucumber',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg',
          description: 'Implemented BDD scenarios linking business and QA.'
        },
        {
          name: 'Jasmine',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
          description: 'Wrote behavior tests for JavaScript codebases.'
        },
        {
          name: 'Karma',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg',
          description: 'Configured unit test runners for Angular projects.'
        },
        {
          name: 'Jest',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
          description: 'Unit and snapshot testing for React and Node.js apps.'
        },
        {
          name: 'Spring Boot',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          description: 'Microservice framework for building robust backend services.'
        }
      ]
    },
    {
      title: 'API & Web Services',
      skills: [
        {
          name: 'Postman',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
          description: 'End-to-end validation of RESTful workflows and integrations.'
        },
        {
          name: 'Swagger',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
          description: 'Defined and tested APIs using OpenAPI specifications.'
        },
        {
          name: 'JMeter',
          logo: 'https://jmeter.apache.org/images/logo.svg',
          description: 'Load, performance, and stress testing for services.'
        },
        {
          name: 'GraphQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
          description: 'Tested schema-driven APIs and complex queries.'
        },
        {
          name: 'LoadRunner',
          logo: 'https://cdn.simpleicons.org/microfocus/0078D4',
          description: 'Performed enterprise-scale load testing.'
        },
        {
          name: 'SoapUI',
          logo: 'https://cdn.simpleicons.org/soapui/6DB33F',
          description: 'Functional and SOAP service testing.'
        }
      ]
    },
    {
      title: 'CI/CD & Build Tools',
      skills: [
        {
          name: 'Jenkins',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
          description: 'Automated regression suites in continuous integration pipelines.'
        },
        {
          name: 'Azure DevOps',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg',
          description: 'Managed build and release pipelines with integrated testing.'
        },
        {
          name: 'GitHub Actions',
          logo: 'https://cdn.simpleicons.org/githubactions/2088FF',
          description: 'Set up workflows for automated quality gates and deployments.'
        },
        {
          name: 'Maven',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
          description: 'Build management and dependency handling for Java projects.'
        },
        {
          name: 'Gradle',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg',
          description: 'Configured flexible build pipelines and test runners.'
        }
      ]
    },
    {
      title: 'Version Control',
      skills: [
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          description: 'Branching strategies and collaborative workflows.'
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          description: 'Hosted repositories with actions and project boards.'
        },
        {
          name: 'Bitbucket',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
          description: 'Managed code reviews and pipelines in enterprise setups.'
        }
      ]
    },
    {
      title: 'Cloud & Containerization',
      skills: [
        {
          name: 'AWS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
          description: 'Validated cloud-native architectures and serverless components.'
        },
        {
          name: 'Azure',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          description: 'Tested distributed services on Microsoft Azure.'
        },
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          description: 'Containerized test environments for reproducible runs.'
        },
        {
          name: 'Kubernetes',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
          description: 'Orchestrated scalable test infrastructure.'
        },
        {
          name: 'Amazon EC2',
          logo: 'https://cdn.simpleicons.org/amazonec2/FF9900',
          description: 'Provisioned and tested scalable compute instances.'
        },
        {
          name: 'Amazon S3',
          logo: 'https://cdn.simpleicons.org/amazons3/569A31',
          description: 'Validated object storage integrations.'
        },
        {
          name: 'Amazon RDS',
          logo: 'https://cdn.simpleicons.org/amazonrds/527FFF',
          description: 'Tested managed relational database services.'
        },
        {
          name: 'AWS Lambda',
          logo: 'https://cdn.simpleicons.org/awslambda/FF9900',
          description: 'Verified serverless functions and triggers.'
        },
        {
          name: 'Amazon CloudWatch',
          logo: 'https://cdn.simpleicons.org/amazoncloudwatch/FF4F8B',
          description: 'Monitored logs and metrics for AWS workloads.'
        },
        {
          name: 'Amazon EKS',
          logo: 'https://cdn.simpleicons.org/amazoneks/FF9900',
          description: 'Orchestrated containerized tests on AWS.'
        }
      ]
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'SQL Server',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
          description: 'Back-end data validation for transactional systems.'
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          description: 'Schema and query testing for relational databases.'
        },
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Ensured data integrity and performance in web apps.'
        },
        {
          name: 'Oracle',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
          description: 'Validated enterprise data pipelines and PL/SQL logic.'
        },
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'Handled NoSQL data verification and aggregation queries.'
        },
        {
          name: 'Redis',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          description: 'Distributed caching and session validation.'
        },
        {
          name: 'Snowflake',
          logo: 'https://cdn.simpleicons.org/snowflake/29B5E8',
          description: 'Tested cloud data warehouse integrations.'
        },
        {
          name: 'Databricks',
          logo: 'https://cdn.simpleicons.org/databricks/FF3621',
          description: 'Automation around big data and ETL workflows.'
        }
      ]
    },
    {
      title: 'Frontend Automation',
      skills: [
        {
          name: 'Angular',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
          description: 'Component-level testing for enterprise SPAs.'
        },
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'E2E and unit tests for dynamic user interfaces.'
        },
        {
          name: 'Vue.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          description: 'Automation of Vue-based dashboards and widgets.'
        },
        {
          name: 'Blazor',
          logo: 'https://cdn.simpleicons.org/blazor/512BD4',
          description: 'Validated interactive WebAssembly components.'
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          description: 'Semantic markup and accessibility checks.'
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          description: 'Responsive layout and visual regression testing.'
        }
      ]
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        {
          name: 'ELK Stack',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
          description: 'Analyzed logs and metrics for issue triage.'
        },
        {
          name: 'Dynatrace',
          logo: 'https://cdn.simpleicons.org/dynatrace/1496FF',
          description: 'Monitored application performance and user experience.'
        },
        {
          name: 'Azure Monitor',
          logo: 'https://cdn.simpleicons.org/azuremonitor/0078D4',
          description: 'Tracked application health and telemetry in Azure.'
        },
        {
          name: 'Application Insights',
          logo: 'https://cdn.simpleicons.org/azuremonitor/5C2D91',
          description: 'Collected performance metrics and diagnostics.'
        }
      ]
    },
    {
      title: 'Messaging & Protocols',
      skills: [
        {
          name: 'Kafka',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
          description: 'Stream processing and event-driven validation.'
        },
        {
          name: 'RabbitMQ',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
          description: 'Validated message queues and asynchronous workflows.'
        },
        {
          name: 'Azure Service Bus',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          description: 'Tested distributed messaging patterns in Azure.'
        },
        {
          name: 'USB',
          logo: 'https://cdn.simpleicons.org/usb/000000',
          description: 'Interfaced with hardware over USB for validation.'
        },
        {
          name: 'BLE',
          logo: 'https://cdn.simpleicons.org/bluetooth/0082FC',
          description: 'Tested Bluetooth Low Energy protocols and devices.'
        }
      ]
    },
    {
      title: 'Collaboration & Documentation',
      skills: [
        {
          name: 'Jira',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
          description: 'Agile project tracking and bug management.'
        },
        {
          name: 'Confluence',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
          description: 'Centralized documentation and knowledge sharing.'
        },
        {
          name: 'draw.io',
          logo: 'https://cdn.simpleicons.org/diagramsdotnet/F08705',
          description: 'Architecture diagrams and test flow charts.'
        },
        {
          name: 'Figma',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
          description: 'Design collaboration and UI mockups.'
        },
        {
          name: 'TestRail',
          logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/TestRail_logo.png',
          description: 'Managed test cases and reporting.'
        },
        {
          name: 'qTest',
          logo: 'https://upload.wikimedia.org/wikipedia/en/d/d8/QTest_logo.png',
          description: 'Tracked QA progress in enterprise projects.'
        }
      ]
    }
  ];
}
