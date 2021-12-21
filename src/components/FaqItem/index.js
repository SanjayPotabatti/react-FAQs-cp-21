// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onShowDetails} = props
  const {id, questionText, answerText, showDetails} = faqDetails

  const onClickButton = () => {
    onShowDetails(id)
  }

  return (
    <li className="listContainer border border-dark mb-2">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="headingStyle">{questionText}</h1>
        <button
          type="button"
          onClick={onClickButton}
          className="bg-transparent border-0"
        >
          <img
            src={
              showDetails
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={showDetails ? 'minus' : 'plus'}
          />
        </button>
      </div>
      <hr />
      {showDetails && <p className="para">{answerText}</p>}
    </li>
  )
}
export default FaqItem
