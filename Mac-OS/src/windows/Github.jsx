import MacWindows from './MacWindows'
import githubData from "../assets/github.json"
import "../styles/github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {

    return <div className="card">
        <img src={data.image} alt="" />
        <h3>{data.title}</h3>
        <p className='desc'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map((tag,idx) =>
                    <div key={idx} className="tag">{tag}</div>
                )
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
};

const Github = ({windowName , setwindowState}) => {
    return (
        <MacWindows windowName={windowName} setwindowState={setwindowState}>
            <div className="cards">
                {githubData.map((project,idx) => {
                    return <GitCard data={project} key={idx} />
                })}
            </div>
        </MacWindows>
    )
}

export default Github