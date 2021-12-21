// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {faqsList}
  }

  onShowDetails = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, showDetails: !eachItem.showDetails}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bgContainer p-4">
        <div className="cardContainer d-flex flex-column align-items-center">
          <h1 className="heading">FAQs</h1>
          <ul className="p-4">
            {faqsList.map(eachItem => (
              <FaqItem
                faqDetails={eachItem}
                onShowDetails={this.onShowDetails}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
