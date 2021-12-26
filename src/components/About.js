import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color : props.mode === 'dark' ? 'white':'#042743',
        backgroundColor : props.mode === 'dark' ? '#042743':'white',
        border : '1px solid',
        borderColor : props.mode === 'dark' ? 'white':'#042743'
    }
    let noBorder = {
        color : props.mode === 'dark' ? 'white':'#042743',
    }
   



    return (
        <div className="container my-5" style= {noBorder}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum sapiente sequi facilis repellat quia laudantium doloribus consectetur aspernatur exercitationem illo, placeat obcaecati, explicabo reprehenderit maiores. Commodi delectus amet officia.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Ease and free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quo cupiditate nulla iure optio animi a ratione ab recusandae odio error, maxime rem debitis, nemo velit accusantium, amet quae aliquam.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatiable</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate, sunt iure similique numquam ullam ipsam voluptas cupiditate repellendus rem velit esse dolores placeat laboriosam nulla obcaecati et? Repellendus, ipsam.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
        </div>
    )
}
