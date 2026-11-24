import { Icon } from './Icon';

export function ToolFaq({ title, items }) {
  return (
    <div className="faq">
      <h3 id="faq">{title}</h3>
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}<Icon name="chevron" /></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
