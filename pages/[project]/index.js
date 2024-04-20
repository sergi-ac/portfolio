import Layout from "@/components/layout/Layout"
import { fetchContentfulData } from "@/fetchContentfulData"

export async function getStaticPaths() {
  const query = `
  query {
    projectTitleCollection {
      items{
        slug
      }
    }
  }
  `
  const rawData = await fetchContentfulData(query)
  const projects = rawData.data.projectTitleCollection.items

  return {
    paths: projects.map((project) => ({
      params: { project: project.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { project: routerUrl } = context.params
  const query = `
    query{
        projectTitleCollection(limit: 1, where: { slug: "${routerUrl}" }){
            items{
                projectTitle
                pagePhotosCollection{
                    items{
                        url
                    }
                }
                backgroundFill
                client
                year
                role
            }
      }
    }
  `
  const projectsData = await fetchContentfulData(query)
  const projectData = projectsData.data.projectTitleCollection.items[0]
  return {
    props: { projectData },
  }
}

const ProjectInner = ({projectData}) => {
    return (
      <Layout>
        <div className="inner-header-bar full-width"/>
        <div className="inner-header-project-info-container full-width">
          <h2 className="inner-project-title half-width">{projectData.projectTitle}</h2>
          <div className="inner-project-meta half-width">
            {projectData.client && <p>Client: {projectData.client} {projectData.year && <span>Year: {projectData.year}</span>}</p>}
            {projectData.role && <p>Role: Photo, Art direction, Post Production</p>}
          </div>
        </div>
        {projectData.pagePhotosCollection.items.map((photo, id) => (
          <div key={id} className="full-width" style={{backgroundColor: projectData.backgroundFill ? projectData.backgroundFill : "white"}}>
            <img className="inner-project-img" src={photo.url} alt="placeholder" />
          </div>
        ))}
      </Layout>
    )
}

export default ProjectInner
