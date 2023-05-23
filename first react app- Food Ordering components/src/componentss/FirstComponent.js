
function FirstComponent(val){
    return(
        <div className="card">
            <h3>This Is A Component {Math.floor(Math.random()*10)}</h3>
            <h6>{val.title}</h6>
            <p>Some details about heading</p>
        </div>
    )
}
export default FirstComponent;