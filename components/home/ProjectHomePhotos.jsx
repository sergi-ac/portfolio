export default function ProjectHomePhotos({project}) {
    return (
        <>
            {project.homePhotosCollection.items.map((photoOrFill, id) => (
                photoOrFill.__typename === 'HomeImages' ? (
                    photoOrFill.image &&
                    <a key={id} className={photoOrFill.style} href={project.slug}>
                        <img className="home-project-img" src={photoOrFill.image.url} alt={photoOrFill.name} />
                    </a>
                ) : (
                    <div key={id} className={photoOrFill.style} style={{backgroundColor: photoOrFill.fill}}></div>
                )
            ))}
        </>
    );
}