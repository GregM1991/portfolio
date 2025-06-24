import faethmKbbq from "@/assets/images/faethm-kbbq-2.jpg";
import eq8Pub from "@/assets/images/eq8-pub.jpg";
import { Jobs } from "@/types/projects";

export const JOBS: Jobs[] = [
  {
    key: "eq8-fullstack-engineer",
    title: "eQ8 | Full-Stack Engineer",
    jobDescription:
      "Eq8 is a strategic workforce planning SaaS platform. I had a great experience working at eQ8, the team there are a fun bunch of people and we were never short of a good time. The platform's back end was built using C# and the .NET framework, with Azure Functions utilized for serverless computing, gRPC used for API communication, and both SQL and noSQL databases. The front end was built using C# Razor pages, but we were in the process of transitioning our front end to use React with Typescript.",
    jobProjects: [
      {
        key: "eq8-refactor-demand-config",
        title: "Refactor of old Demand Configuration",
        points: [
          {
            key: "eq8-refactor-react-zustand",
            copy: "Built out new designs in React/Typescript with Zustand, from C# Razor pages"
          },
          {
            key: "eq8-refactor-feedback-designs",
            copy: "EQ8 was quite fast-paced, so the designs for the page were evolving as we were building it out. I assisted in feedback of these designs as well as building them"
          },
          {
            key: "eq8-refactor-grpc-crud",
            copy: "Helped build out gRPC APIs for CRUD operations on driver associations"
          }
        ]
      },
      {
        key: "eq8-global-supply-upload",
        title: "Global Supply Upload",
        points: [
          {
            key: "eq8-global-upload-create-subsets",
            copy: "Allowed for clients to upload a global supply, giving them the power to create subsets of this data for different plans"
          },
          {
            key: "eq8-global-upload-greenfields",
            copy: "Built out greenfields designs for the page that allowed users to split the global dataset using filters"
          },
          {
            key: "eq8-global-upload-api-design",
            copy: "Assisted on the design and creation of APIs to segment and store data in the back end"
          }
        ]
      }
    ],
    imageSrc: eq8Pub,
    imageAltText:
      "Greg, Annisa and Aaron smiling and having a beer in the sunshine"
  },
  {
    key: "faethm-fullstack-engineer",
    title: "Faethm | Full-Stack Engineer",
    jobDescription:
      "Faethm was a workforce analytics and strategic workforce planning SaaS platform (lots of HR tech I know 😅). Once again I was surrounded by fantastic people, especially the design team. We had a great working relationship (see Karin's testimonial below). The back end was built with Node JS, with AWS Lamdas for serverless computing, gRPC (with some GraphQL) used for APIs and both SQL and noSQL databases. ",
    jobProjects: [
      {
        key: "faethm-auth0-migration",
        title: "In-house Identity to Auth0",
        points: [
          {
            key: "faethm-auth0-invite-only",
            copy: "Implemented an 'invite-only' model instead of a standard sign-up process, where user accounts were created upon invitation and automatically deleted after 12 months of inactivity"
          },
          {
            key: "faethm-auth0-global-profile",
            copy: "User profile was set globally with a name and email. Roles were specific to each organisation"
          },
          {
            key: "faethm-auth0-api-creation",
            copy: "Created a set of APIs for our front end login & user management app to use auth0"
          }
        ]
      },
      {
        key: "faethm-swp-supply-demand",
        title: "SWP - Supply & Demand Model",
        points: [
          {
            key: "faethm-swp-multi-page-form",
            copy: "Navigate users through a multi-page form to explain what the impact of different technologies would be on their role in the workforce"
          },
          {
            key: "faethm-swp-graph-indicator",
            copy: "Implemented a graph to indicate the need to increase/decrease the number of individuals in a particular role"
          },
          {
            key: "faethm-swp-sections",
            copy: "3 sections (pages): description of their scenario, selection of technologies adopted and selection of workforce impact (retirement or attrition)"
          },
          { key: "faethm-swp-rest-apis", copy: "REST APIs based on resource" }
        ]
      }
    ],
    imageSrc: faethmKbbq,
    imageAltText:
      "Faethm team at Korean BBQ eating and drinking and smiling at the camera"
  }
];
