import { Fragment } from 'react';
import { ToolFaq } from './ToolFaq';

export function ToolGuide({ title, stepHeading, steps, about, faqTitle, faq, children }) {
  return (
    <section id="como-usar" aria-labelledby="guide-title">
      <h2 id="guide-title">{title}</h2>
      {stepHeading && <h3>{stepHeading}</h3>}
      <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
      {children}
      <h3 id="about">{about[0]}</h3>
      <p>{about[1]}</p>
      <ToolFaq title={faqTitle} items={faq} />
    </section>
  );
}

export function UsageExamples({ title, examples, linkTo }) {
  return (
    <section id="uses" aria-labelledby="uses-title">
      <h2 id="uses-title">{title}</h2>
      {examples.map(([name, description, source]) => (
        <Fragment key={name}>
          <h3>{name}</h3>
          <p>{description}{source && <> <a href={linkTo(source.href)}>{source.label}</a></>}</p>
        </Fragment>
      ))}
    </section>
  );
}
