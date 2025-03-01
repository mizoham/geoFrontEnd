import Item from './Item.jsx'
import { PRODUCTS , RESOURCES ,COMPANY , SUPPORT   } from "./Menu.js"


const ItemContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-5 px-5 py-16'>
      <Item Links={PRODUCTS} title="PRODUCTS"/>
      <Item Links={RESOURCES} title="RESOURCES"/>
      <Item Links={COMPANY}  title="COMPANY"/>
      <Item Links={SUPPORT} title="SUPPORT"/>
    </div>
  )
}

export default ItemContainer
