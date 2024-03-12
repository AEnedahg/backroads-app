export default function Title ({textFirst, textSecond}) {
  return (
    <div className="section-title">
      <h2>
        {textFirst} <span>{textSecond}</span>
      </h2>
    </div>
  )
}
