function Preview({ props }) {
    return (
        <div className={`${props.modal} ${props.show}`}>
            <div className="modal-content scroll">
                <div className='closebtnContainer'>
                    <button className='closebtn' onClick={() => props.setShow("none")}>&times;</button>
                </div>
                <section id={props.id}>
                    <h2>{props.actions.purpose + " " + props.selectedAnimal} Feed plan </h2>
                    {
                        props.loadPreview && props.previewContent.Importantnote.length == 0 ?
                            <div style={{ fontSize: "18px", textAlign: "center" }}>LOADING!!!</div>
                            :
                            !props.loadPreview && props.previewContent.Importantnote.length >= 1 ?
                                <section>
                                    <p>Important Note</p>
                                    <ul>
                                        {
                                            props.previewContent.Importantnote.map((value, index) =>
                                                <li key={index}>{value}</li>
                                            )
                                        }
                                    </ul>
                                    <p>Requirements</p>
                                    <ul>
                                        <li><b>Total Protein:</b> {props.totalProtein} kg </li>
                                        <li><b>Total Energy:</b> {props.totalEnergy} kg</li>
                                        <li><b>Total Fiber:</b> {props.totalFiber} kg</li>
                                        <li>
                                            <span>Ingredients</span>
                                            <ul>
                                                {
                                                    props.selectedFeeds.map((item, index) =>
                                                        <li key={index}>{item} : {props.previewContent.Ingredients[item]}</li>
                                                    )
                                                }

                                                <li>Mineral supplement: {props.previewContent.Ingredients["Mineral_supplement"]}</li>
                                                <li>Salt: {props.previewContent.Ingredients.Salt}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p>Instructions</p>
                                    <ul>
                                        {
                                            props.previewContent.Instructions.map((value, index) =>
                                                <li key={index}>{value}</li>
                                            )
                                        }
                                    </ul>
                                </section>
                                :
                                !props.loadPreview && props.previewErr &&
                                <div style={{ fontSize: "18px", textAlign: "center" }}>
                                    Network Error! check your internet connection and try again
                                </div>
                    }
                </section>
            </div>

        </div>
    );
}

export default Preview;