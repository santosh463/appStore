// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabBtnClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
