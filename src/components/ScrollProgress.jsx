const ScrollProgress = ({ progress }) => {
  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${progress}%` }}
    />
  )
}

export default ScrollProgress
