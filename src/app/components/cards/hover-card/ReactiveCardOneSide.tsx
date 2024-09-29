import './ReactiveCardOneSide.css'
const ReactiveCardOneSide = ({children}) => {
    return (
        
        <div className="justify-center items-middle m-10 container">
        <div className="canvas">
          {/* {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`}></div>
          ))} */}
          <div id="card">
            <div className="scrollable-content">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      
        )
    }
        

  
 
export default ReactiveCardOneSide