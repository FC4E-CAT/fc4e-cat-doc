import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Feature 1',
  //   Svg: require('@site/static/img/logo.svg').default,
  //   description: (
  //     <>
  //       Describe Feature 1
  //     </>
  //   ),
  // },
  // {
  //   title: 'Feature 2',
  //   Svg: require('@site/static/img/logo.svg').default,
  //   description: (
  //     <>
  //       Describe Feature 1
  //     </>
  //   ),
  // },
  // {
  //   title: 'Feature 2',
  //   Svg: require('@site/static/img/logo.svg').default,
  //   description: (
  //     <>
  //       Describe Feature 2
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
