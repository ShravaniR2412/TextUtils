import React,{useState} from 'react';

export default function About() {

    const [myStyle,setmyStyle]=useState({
        color: 'black',
        backgroundColor:'white'
    })
    const [btnText,setbtnText]=useState('Enable Dark Mode')

    const toggleStyle=()=>{

        if(myStyle.color==='white'){

            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })

            setbtnText("Enable Dark Mode")
        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText("Enable Light Mode")

        }


    }



    // const myStyle={
    //         color: 'white',
    //         backgroundColor:'black'
    // }
    return (
        <div className='container my-5' style={myStyle} >
            <h1>About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body " style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNames control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNames control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyle}  className="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNames control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>

                </div>
                <div className="container ">
                    <button onClick={toggleStyle} className="btn btn-primary my-2" >{btnText}</button>
                </div>
            </div>
        </div>
    );
}
