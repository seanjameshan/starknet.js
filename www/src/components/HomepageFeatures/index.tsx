import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scalability and Integrity',
    image: 'img/starknet-3.png',
    description: (
      <>
        Starknet supports scale, while preserving the security of L1 Ethereum by producing STARK proofs off-chain, and then verifying those proofs on-chain.
      </>
    ),
  },
  {
    title: 'General Purpose',
    image: 'img/starknet-2.png',
    description: (
      <>
        On Starknet, developers can easily deploy any business logic using Starknet Contracts.
      </>
    ),
  },
  {
    title: 'Composability',
    image: 'img/starknet-1.png',
    description: (
      <>
        Starknet provides Ethereum-level composability – facilitating easy development and innovation.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={`${siteConfig.baseUrl}${image}`} />
      </div>
      <div className="text--center padding-horiz--md" style={{marginTop: "15px"}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
