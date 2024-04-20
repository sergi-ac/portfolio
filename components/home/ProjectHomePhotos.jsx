import Link from "next/link";
export default function ProjectHomePhotos({project}) {
    return (
        <>
            {project.homePhotosCollection.items.map((photoOrFill, id) => (
                photoOrFill.__typename === 'HomeImages' ? (
                    photoOrFill.image &&
                    <Link key={id} className={photoOrFill.style} href={project.slug}>
                        <img className="home-project-img" src={photoOrFill.image.url} alt={photoOrFill.name} />
                    </Link>
                ) : (
                    <div key={id} className={`home-project-fill ${photoOrFill.style}`} style={{backgroundColor: photoOrFill.fill}}></div>
                )
            ))}
        </>
    );
}