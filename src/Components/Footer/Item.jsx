/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
 
const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {Links.map((link) => {
        return (
          <li key={link.name}>
            <a className="text-gray-400 hover:text-teal-400 duration-300
            text-sm cursor-pointer leading-6" href={link.link}>{link.name}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Item
