const Accordion = (props) => {

    const { items } = { ...props }

    return (
        <>
            <div className="accordion">
                {
                    items && items.map(el => (
                        <details>
                            <summary>
                                { el.title }
                                <div className="marker">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </summary>
                            <p>{ el.description }</p>
                        </details>
                    ))
                }
            </div>
            <style jsx>{`
                .accordion {
                    width: 100%;
                  }
                  
                  .accordion details {
                    border-top: 1px solid #484848;
                  }
                  
                  .accordion details summary {
                    position: relative;
                    font-weight: 300;
                    cursor: pointer;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                  }
                  
                  .accordion details[open] > summary {
                    font-weight: 500;
                  }
                  
                  .accordion details p {
                    font-weight: 300;
                  }
                  
                  .accordion details summary,
                  .accordion details p {
                    margin: 9px 0;
                  }
                  
                  .accordion .marker {
                    display: block;
                  }
                  
                  .accordion details > summary .marker .line {
                    width: 1px;
                    height: 15px;
                    background: #000;
                    position: absolute;
                    right: 10px;
                  }
                  
                  .accordion details > summary .marker .line:nth-child(2) {
                    transform: rotateZ(90deg);
                  }
                  
                  .accordion details[open] > summary .marker .line:nth-child(1) {
                    display: none;
                  }
                  
                  .accordion details:last-child {
                    border-bottom: 1px solid #484848;
                  }
                  
                  details > summary::-webkit-details-marker {
                    display: none;
                  }
            `}</style>
        </>
    );
}

export default Accordion;