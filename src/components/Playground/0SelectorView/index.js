import React, { useState } from 'react';
import styles from './SelectorView.module.css';

import LiveSelector from '@site/src/components/Playground/live/0LCLive';
import ViewSelector from '@site/src/components/Playground/view/0LCView';
import CodeSelector from '@site/src/components/Playground/code/0LCCode';

function PgSelector() {
  const [visibility, setVisibility] = useState({
    live: true,
    view: true,
    code: true,
  });

  const handleVisibilityChange = (event) => {
    const { name, checked } = event.target;
    setVisibility((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <div className={styles.PgTestSelector}>
        <label>
          <input
            type="checkbox"
            name="live"
            checked={visibility.live}
            onChange={handleVisibilityChange}
          />
          <span>Afficher "Editeur interactif"</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="view"
            checked={visibility.view}
            onChange={handleVisibilityChange}
          />
          <span>Afficher "Aperçu"</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="code"
            checked={visibility.code}
            onChange={handleVisibilityChange}
          />
          <span>Afficher "Code"</span>
        </label>
      </div>


      <div className={styles.PgTestSelector}>
        {visibility.live && (
          <div>
            <span className={styles.PgSelectorTitle}>Editeur interactif</span> <LiveSelector />
          </div>
        )}

        {visibility.view && (
          <div>
            <span className={styles.PgSelectorTitle}>Aperçu uniquement</span> <ViewSelector />
          </div>
        )}

        {visibility.code && (
          <div>
            <span className={styles.PgSelectorTitle}>Code uniquement</span> <CodeSelector />
          </div>
        )}
      </div>
    </div>
  );
}

export default PgSelector;