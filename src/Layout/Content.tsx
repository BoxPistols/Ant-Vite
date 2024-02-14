interface ContentProps {
  text?: string
}

const Content: React.FC<ContentProps> = ({ text = 'Hello' }) => {
  return (
    <div>
      <h1>Content Component</h1>
      <p>{text}</p>
    </div>
  )
}

export default Content
