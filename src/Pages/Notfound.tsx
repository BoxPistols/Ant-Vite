import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>このようなページは存在しません。</p>
      <Link to="/home">Go to Home</Link>
    </div>
  )
}

export default NotFound
