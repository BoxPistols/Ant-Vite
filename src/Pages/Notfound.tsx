import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you requested could not be found.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  )
}

export default NotFound
