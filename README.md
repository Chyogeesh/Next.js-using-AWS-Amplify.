# Next.js-using-AWS-Amplify.
It is a internship assignment
Setup Next.js Project:
Install Next.js globally: npm install -g next
Create a new Next.js project: npx create-next-app my-next-app
Navigate to the project directory: cd my-next-app
Initialize Amplify Project:
Install the Amplify CLI globally: npm install -g @aws-amplify/cli
Initialize a new Amplify project: amplify init
Follow the prompts to configure the project settings. Make sure to select GraphQL as the API type.
Create GraphQL API:
Add a new API to your Amplify project: amplify add api
Follow the prompts to define your GraphQL schema. You can create types and fields according to your website's requirements.
Develop Website:
Create your website pages and components inside the pages directory of your Next.js project.
Use getStaticProps or getServerSideProps to fetch data from your GraphQL API and pass it as props to your components.
Deploy to AWS Amplify:
Commit your changes to git: git init, git add ., git commit -m "Initial commit"
Push your code to a git repository, preferably GitHub or AWS CodeCommit.
Deploy your Next.js project to AWS Amplify:
Copy code
amplify publish
Setup Custom Domain (Optional):
If you want to use a custom domain, you can configure it in the Amplify Console after deploying your app.
