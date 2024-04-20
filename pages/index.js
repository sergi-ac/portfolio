import Layout from "@/components/layout/Layout";
import { fetchContentfulData } from "@/fetchContentfulData";
import ProjectHomePhotos from "@/components/home/ProjectHomePhotos";
import AboutSection from "@/components/home/AboutSection";

export const getStaticProps = async () => {
  const query = `
  query {
    homePage(id:"2QWmFWQuWLMKoUUKCrwjT4"){
      projectsCollection{
        items{
           slug
          projectTitle
          homePhotosCollection(limit: 50) {
            items {
              ... on HomeImages {
                __typename
                name
                style
                image {
                  url
                }
              }
              ... on HomeFill{
                __typename
                fill
                style
              }
            }
          }
        }
      }
    }
  }
  `
  const projectsData = await fetchContentfulData(query)
  const projects = projectsData.data.homePage.projectsCollection.items
  return {
    props: { projects },
  }
}

export default function Home({projects}) {
  return (
    <Layout>
        {projects.map((project, id) => (
          <ProjectHomePhotos key={id} project={project} />
        ))}
      <AboutSection/>
    </Layout>
  );
}
